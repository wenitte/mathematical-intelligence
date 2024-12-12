# 

Source: https://proofwiki.org/wiki/Generating_Function_of_Sequence_by_Index

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.

Then:

$z \map {G'} z$ is the generating function for the sequence $\sequence {n a_n}$
where $\map {G'} z$ is the derivative of $\map G z$ with respect to $z$.


Proof













\(\ds \map {G'} z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {k + 1} a_{k + 1} z^k\)





Derivative of Generating Function








\(\ds \leadsto \ \ \)





\(\ds z \map {G'} z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {k + 1} a_{k + 1} z^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k + 1 \mathop \ge 0} k a_k z^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} k a_k z^k\)





as the term vanishes when $k = 0$



The result follows by definition of generating function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions




