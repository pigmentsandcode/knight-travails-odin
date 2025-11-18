# Knight Travails from The Odin Project

## The Problem

Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square.

In this problem, the chessboard can be represented as a graph:

Each square on the board is a node (or vertex). A knight’s valid moves from any square represent the edges (or connections) between the vertices. Thus, the problem of finding the shortest path for the knight’s movement becomes a graph traversal problem. The goal is to traverse the graph (the chessboard) to find the shortest route between two nodes (the start and end positions).

Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

## Solution

Use a Set to track visited coordinates to avoid loops.
Use an array as a queue to traverse the connections between squares, stopping when we hit the end square.
