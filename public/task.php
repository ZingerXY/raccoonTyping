<?php

header('Content-type: application/json');
$taskList = json_decode(file_get_contents('./tasks.json'));
$result = [];

if (isset($_GET['type'])) {
	switch ($_GET['type']) {
		case 'task':
			if (!isset($_GET['id'])) {
				break;
			}
			$task = array_pop(array_filter($taskList, function ($task) {
				return $task->id == $_GET['id'];
			}));
			if ($task) {
				$result = $task;
			}
			break;
		case 'tasks':
			$result = $taskList;
			break;
		case 'names':
		default:
			$result = getNames($taskList);
			break;
	}
	exit(json_encode($result));
}
exit(json_encode(getNames($taskList)));

function getNames($list) {
	return array_map(function ($task) {
		return [
			'id' => $task->id,
			'name' => $task->name
		];
	}, $list);
}