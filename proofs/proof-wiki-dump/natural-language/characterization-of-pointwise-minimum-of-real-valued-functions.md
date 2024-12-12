# 

Source: https://proofwiki.org/wiki/Characterization_of_Pointwise_Minimum_of_Real-Valued_Functions


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be real-valued functions.
Let $f \wedge g$ denote the pointwise maximum of $f$ and $g$, that is, $f \wedge g$ is the mapping defined by:

$\forall s \in S : \map {\paren{f \wedge g} } s = \min \set{\map f s, \map g s}$

Then:

$f \wedge g = \dfrac 1 2 \paren{f + g - \size{f - g}}$
where:

$f + g$ denotes the pointwise addition of $f$ and $g$
$f - g$ denotes the pointwise difference of $f$ and $g$
$\size{f - g}$ denotes the absolute value of $f - g$
$\dfrac 1 2 \paren{f + g - \size{f - g}}$ denotes the pointwise scalar multiplication of $f + g - \size{f - g}$ by $\dfrac 1 2$
Proof
We have:










\(\ds \forall s \in S: \, \)



\(\ds \map {\paren{f \wedge g} } s\)

\(=\)







\(\ds \min\set {\map f s, \map g s}\)





Definition of Pointwise Minimum of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren{\map f s + \map g x - \size{\map f x - \map g x} }\)





Min Operation Representation on Real Numbers














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren{\map f s + \map g s - \size{\map {\paren{f - g} } s} }\)





Definition of Pointwise Difference of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren{\map f s + \map g s - \map {\size{f - g} } s}\)





Definition of Absolute Value of Real-Valued Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren{\map {\paren{f + g} } s - \map {\size{f - g} } s}\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map {\paren{f + g - \size{f - g} } } s\)





Definition of Pointwise Difference of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map {\paren{\dfrac 1 2 \paren{f + g - \size{f - g} } } } s\)





Definition of Pointwise Scalar Multiplication of Real-Valued Function




By definition of equality of mappings:

$f \wedge g = \dfrac 1 2 \paren{f + g - \size{f - g}}$
$\blacksquare$





