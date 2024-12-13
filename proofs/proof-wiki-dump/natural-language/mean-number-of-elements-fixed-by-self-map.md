# 

Source: https://proofwiki.org/wiki/Mean_Number_of_Elements_Fixed_by_Self-Map



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $S$ be a finite set of cardinality $n$.
Let $S^S$ be the set of all mappings from $S$ to itself.
Let $\map \mu n$ denote the arithmetic mean of the number of fixed points of all the mappings in $S^S$.

Then:

$\map \mu n = 1$


Proof
Let $f \in S^S$ be an arbitrary mapping from $S$ to itself.
Let $s \in S$ be an arbitrary element of $S$.
$s$ has an equal probability of being mapped to any element of $S$.
Hence the probability that $\map f s = s$ is equal to $\dfrac 1 n$.

There are $n$ elements of $S$.
By the above argument, each one has a probability of $\dfrac 1 n$ that it is a fixed point.
Thus the expectation of the number of fixed points is $n \times \dfrac 1 n = 1$.
$\blacksquare$


Examples
Example: $7$ Envelopes
$7$ letters are placed at random into $7$ addressed envelopes, not necessarily making sure that one envelope contains only one letter.
How many letters, on average, can be expected to be in its correct envelope?


Sources
1982: Donald J. Newman: A Problem Seminar: Expectations: $104$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The misaddressed letters: $131$




