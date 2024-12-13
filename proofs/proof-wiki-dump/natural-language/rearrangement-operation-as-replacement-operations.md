# 

Source: https://proofwiki.org/wiki/Rearrangement_Operation_as_Replacement_Operations

Example of use of Replacement Operation
Let $\left({a, b, c, d}\right)$ be an ordered quadruple consisting of four variables whose values are to be rearranged into the order $\left({b, c, d, a}\right)$.
This can be implemented using replacement operations.
Let $t$ be a new variable which has been established for this purpose.
Then the sequence of replacement operations:

$t \gets a$
$a \gets b$
$b \gets c$
$c \gets d$
$d \gets t$
performs the task.


Proof
Observing the values of the variables after each replacement operation:




Operation

$a$

$b$

$c$

$d$

$t$


$t \gets a$

$a$

$b$

$c$

$d$

$a$


$a \gets b$

$b$

$b$

$c$

$d$

$a$


$b \gets c$

$b$

$c$

$c$

$d$

$a$


$c \gets d$

$b$

$c$

$d$

$d$

$a$


$d \gets t$

$b$

$c$

$d$

$a$

$a$

Hence the result.
Notice how the sequence:

$a \gets b, b \gets c, c \gets d, d \gets a$
does not do the job.
This is because, when $d \gets a$ is performed, $a$ no longer contains its original value, and the resulting ordered quadruple is $\left({b, c, d, b}\right)$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.1$: Algorithms: Exercise $1$




