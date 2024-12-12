# 

Source: https://proofwiki.org/wiki/Ceiling_of_x%2Bm_over_n/Proof_1

Theorem
Let $m, n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\ceiling {\dfrac {x + m} n} = \ceiling {\dfrac {\ceiling x + m} n}$
where $\ceiling x$ denotes the ceiling of $x$.


Proof













\(\ds \ceiling {\dfrac {x + m} n}\)

\(=\)







\(\ds -\floor {-\dfrac {x + m} n}\)





Floor of Negative equals Negative of Ceiling














\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {-x - m} n}\)




















\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {\floor {-x} - m} n}\)





Floor of $\dfrac {x + m} n$














\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {-\ceiling x - m} n}\)





Floor of Negative equals Negative of Ceiling














\(\ds \)

\(=\)







\(\ds -\floor {-\dfrac {\ceiling x + m} n}\)




















\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {\ceiling x + m} n}\)





Floor of Negative equals Negative of Ceiling



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $35$ (Answers to Exercises)




