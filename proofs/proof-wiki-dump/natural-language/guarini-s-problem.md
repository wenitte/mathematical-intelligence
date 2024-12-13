# 

Source: https://proofwiki.org/wiki/Guarini%27s_Problem



Classic Problem
$2$ white knights and $2$ black knights are placed on the corners of a $3 \times 3$ chessboard as follows:


abc332211abc
All pieces may move according to the rules of chess.
How can the white knights and black knights change places?


Solution
A knight cannot access the square $\mathrm b 2$, so let us ignore that square throughout the following analysis.
From every square, it is possible to access exactly $2$ other squares by means of a knight's move.
Let us construct a graph whose vertices correspond to the squares and whose edges are the possible moves between those squares.
It is seen to be the cycle graph of order $8$.


The solution becomes apparent.
Each knight needs to move along the vertices of the graph from where it starts to the position directly opposite in the graph.
Hence the moves are:

$\mathrm a 1 \to \mathrm c 2 \to \mathrm a 3 \to \mathrm b 1 \to \mathrm c 3$
$\mathrm a 3 \to \mathrm b 1 \to \mathrm c 3 \to \mathrm a 2 \to \mathrm c 1$
$\mathrm c 3 \to \mathrm a 2 \to \mathrm c 1 \to \mathrm b 3 \to \mathrm a 1$
$\mathrm c 1 \to \mathrm b 3 \to \mathrm a 1 \to \mathrm c 2 \to \mathrm a 3$
Or they could go in the opposite direction:

$\mathrm a 1 \to \mathrm b 3 \to \mathrm c 1 \to \mathrm a 2 \to \mathrm c 3$
$\mathrm c 1 \to \mathrm a 2 \to \mathrm c 3 \to \mathrm b 1 \to \mathrm a 3$
$\mathrm c 3 \to \mathrm b 1 \to \mathrm a 3 \to \mathrm c 2 \to \mathrm a 1$
$\mathrm a 3 \to \mathrm c 2 \to \mathrm a 1 \to \mathrm b 3 \to \mathrm c 1$
Move each knight in turn along its required path, so as to vacate the square it was on ready for the knight behind it to occupy.
$\blacksquare$


Also see
Definition:Knight's Tour


Source of Name
This entry was named for Paolo Guarini di Forli.


Historical Note
Guarini's Problem is one of the first recreational chess problems to be posed.
Paolo Guarini di Forli published it in $1512$.
The solution given here is that by Henry Ernest Dudeney from $1917$.
He couched the problem in the context of frogs hopping between lily pads, presumably for variety or disguise.
He credits Guarini appropriately in his solution.


Sources
1917: Henry Ernest Dudeney: Amusements in Mathematics: Dynamical Chess Puzzles: $341$. The Four Frogs
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Exchanging the Knights: $101$




