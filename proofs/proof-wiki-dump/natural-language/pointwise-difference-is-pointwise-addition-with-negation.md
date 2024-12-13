# 

Source: https://proofwiki.org/wiki/Pointwise_Difference_is_Pointwise_Addition_with_Negation


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be real-valued functions.
Let $f - g$ denote the pointwise difference of $f$ and $g$, that is, $f - g$ is the mapping defined by:

$\forall s \in S : \map {\paren{f - g} } s = \map f s - \map g s$

Then:

$f - g = f + \paren{-g}$
where:

$-g$ denotes the pointwise negation of $g$
$f + \paren{-g}$ denotes the pointwise addition of $f$ and $-g$


Proof
We have:










\(\ds \forall s \in S: \, \)



\(\ds \map {\paren{f - g} } s\)

\(=\)







\(\ds \map f s - \map g s\)





Definition of Pointwise Difference of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map f s + \paren{- \map g s}\)




















\(\ds \)

\(=\)







\(\ds \map f s + \map {\paren{-g} } s\)





Definition of Pointwise Negation of Real-Valued Function














\(\ds \)

\(=\)







\(\ds \map {\paren{f + \paren{-g} } } s\)





Definition of Pointwise Addition of Real-Valued Functions




By definition of equality of mappings:

$f - g = f + \paren{-g}$
$\blacksquare$





