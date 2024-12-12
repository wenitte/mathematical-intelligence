# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Reciprocals_of_Natural_Numbers

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = \dfrac 1 n$
That is:

$\sequence {a_n} = 1, \dfrac 1 2, \dfrac 1 3, \dfrac 1 4, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \map \ln {\dfrac 1 {1 - z} }$

There is believed to be a mistake here, possibly a typo.In particular: $a_0 = 0$ is needed to define $\map G z$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Take the sequence:

$S_n = 1, 1, 1, \ldots$
From Generating Function for Constant Sequence, this has the generating function:

$\ds \map G z = \sum_{n \mathop = 0}^\infty z^n = \frac 1 {1 - z}$
By Integral of Generating Function:














\(\ds \int_0^z \map G t \rd t\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {z^k} k\)




















\(\ds \)

\(=\)







\(\ds z + \dfrac {z^2} 2 + \dfrac {z^3} 3 + \dfrac {z^4} 4 + \cdots\)









which is the power series whose coefficients are $\sequence {a_n}$.

But:

$\map G z = \dfrac 1 {1 - z}$
and so by Primitive of Reciprocal and the Integration by Substitution:














\(\ds \int_0^z \map G t \rd t\)

\(=\)







\(\ds \int_0^z \dfrac 1 {1 - t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 {1 - z} }\)










The result follows from the definition of generating function.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $2$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(17)$




