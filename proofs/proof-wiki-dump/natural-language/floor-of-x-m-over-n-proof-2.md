# 

Source: https://proofwiki.org/wiki/Floor_of_x%2Bm_over_n/Proof_2

Theorem
Let $m, n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\floor {\dfrac {x + m} n} = \floor {\dfrac {\floor x + m} n}$
where $\floor x$ denotes the floor of $x$.


Proof
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \dfrac {x + m} n$
It is clear that $f$ is both strictly increasing and continuous on the whole of $\R$.
Let $\dfrac {x + m} n \in \Z$.
Then:










\(\ds \exists s \in \Z: \, \)



\(\ds \dfrac {x + m} n\)

\(=\)







\(\ds s\)














\(\ds \leadsto \ \ \)





\(\ds x + m\)

\(=\)







\(\ds n s\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds n s - m\)




















\(\ds \)

\(\in\)







\(\ds \Z\)









Thus:

$\forall x \in \R: \map f x \in \Z \implies x \in \Z$
So the conditions are fulfilled for McEliece's Theorem (Integer Functions) to be applied:

$\floor {\map f x} = \floor {\map f {\floor x} } \iff \paren {\map f x \in \Z \implies x \in \Z}$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $35$ (Answers to Exercises)




