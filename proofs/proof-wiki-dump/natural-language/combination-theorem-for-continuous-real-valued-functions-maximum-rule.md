# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Real-Valued_Functions/Maximum_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \tau}$ be a topological space.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be continuous real-valued functions.
Let $f \vee g$ denote the pointwise maximum of $f$ and $g$, that is, $f \vee g$ is the mapping defined by:

$\forall s \in S : \map {\paren{f \vee g} } s = \max \set{\map f s, \map g s}$

Then:

$f \vee g$ is a continuous real-valued function


Proof
From Characterization of Pointwise Maximum of Real-Valued Functions:

$f \vee g = \dfrac 1 2 \paren{f + g + \size{f - g}}$

We have:














\(\ds \)

\(\)







\(\ds f, g \text{ are continuous real-valued functions}\)




















\(\ds \)

\(\leadsto\)







\(\ds f -g \text{ is a continuous real-valued function}\)





Difference Rule for Continuous Real-Valued Functions














\(\ds \)

\(\leadsto\)







\(\ds \size{f - g} \text{ is a continuous real-valued function}\)





Absolute Value Rule for Continuous Real-Valued Function














\(\ds \)

\(\leadsto\)







\(\ds f + g + \size{f - g} \text{ is a continuous real-valued function}\)





Sum Rule for Continuous Real-Valued Functions














\(\ds \)

\(\leadsto\)







\(\ds \dfrac 1 2 \paren{f + g + \size{f - g} } \text{ is a continuous real-valued function}\)





Multiple Rule for Continuous Real-Valued Function




The result follows.
$\blacksquare$





