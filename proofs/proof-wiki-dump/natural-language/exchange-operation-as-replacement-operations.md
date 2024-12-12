# 

Source: https://proofwiki.org/wiki/Exchange_Operation_as_Replacement_Operations

Example of use of Replacement Operation
Let $x$ and $y$ be variables whose values are to be exchanged.
The exchange operation on $x$ and $y$ can be implemented using replacement operations.
Let $t$ be a third variable which has been established for this purpose.
Then the sequence of replacement operations:

$t \gets x$
$x \gets y$
$y \gets t$
performs the task.


Proof
Observing the values of the variables after each replacement operation:




Operation

$x$

$y$

$t$


$t \gets x$

$x$

$y$

$x$


$x \gets y$

$y$

$y$

$x$


$y \gets t$

$y$

$x$

$x$

Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.1$: Algorithms




