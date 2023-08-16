// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Queue {
    uint256 private front;
    uint256 private rear;
    uint256 private maxSize;
    uint256[] private queue;

    constructor(uint256 _maxSize) {
        maxSize = _maxSize;
        queue = new uint256[](maxSize);
        front = 0;
        rear = 0;
    }

    function enqueue(uint256 _value) public {
        require((rear + 1) % maxSize != front, "Queue is full");
        queue[rear] = _value;
        rear = (rear + 1) % maxSize;
    }

    function dequeue() public returns (uint256) {
        require(front != rear, "Queue is empty");
        uint256 frontValue = queue[front];
        front = (front + 1) % maxSize;
        return frontValue;
    }

    function getQueueLength() public view returns (uint256) {
        if (rear >= front) {
            return rear - front;
        } else {
            return maxSize - (front - rear);
        }
    }

    function getFrontElement() public view returns (uint256) {
        require(front != rear, "Queue is empty");
        return queue[front];
    }
}
