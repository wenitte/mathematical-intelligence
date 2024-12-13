# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Generating_Function_of_Sequence

Theorem
Let $\sequence{a_n}$ be a sequence which has a generating function which is convergent.
Let $\map G z$ be the generating function for $\sequence{a_n}$.

Let $\map f x$ be the step function:

$\map f x = \ds \sum_{k \mathop \in \Z} a_k \sqbrk{0 \le k \le x}$
where $\sqbrk{0 \le k \le x}$ is Iverson's convention.

Then the Laplace transform of $\map f x$ is given by:

$\laptrans {\map f s} = \dfrac {\map G {e^{-s} }} s$


Proof
We note that:




\(\text {(1)}: \quad\)









\(\ds \laptrans {\map f s}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map f t \rd t\)





Definition of Laplace Transform



and:




\(\text {(2)}: \quad\)









\(\ds \map G z\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n z^n\)





Definition of Generating Function




Then:














\(\ds \int_n^{n + 1} e^{-s t} \map f t \rd t\)

\(=\)







\(\ds \int_n^{n + 1} \paren{a_0 + a_1 + \cdots + a_n} e^{-s t} \rd t\)





Definition of $f \left({x}\right)$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n a_k \sqbrk{\dfrac {-1} s e^{-s t} }_n^{n + 1}\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {a_k} s \paren{e^{-s n} - e^{-s \paren{n + 1} } }\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f s}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map f t \rd t\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \sum_{k \mathop = 0}^n \dfrac {a_k} s \paren{e^{-s n} - e^{-s \paren{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_0} s \paren{1 - e^{-s} } + \dfrac {a_0 + a_1} s \paren{e^{-s} - e^{-2 s} } + \dfrac {a_0 + a_1 + a_2} s \paren{e^{-2 s} - e^{-3 s} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren{a_0 + a_1 e^{-s} + a_2 e^{-2 s} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 s \sum_{n \mathop \ge 0} a_n e^{-s n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 s \map G {e^{-s} }\)





from $(2)$



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $13$




