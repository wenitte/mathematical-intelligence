# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Real-Valued_Functions/Difference_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \tau}$ be a topological space.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be contiuous real-valued functions.
Let $f - g : S \to \R$ be the pointwise difference of $f$ and $g$, that is, $f - g$ is the mappping defined by:

$\forall s \in S : \map {\paren{f - g} } s = \map f s - \map g s$

Then:

$f - g$ is a coninuous real-valued function


Proof
From Pointwise Difference is Pointwise Addition with Negation:

$f - g = f + \paren{-g}$
where:

$-g$ denotes the pointwise negation of $g$
$f + \paren{-g}$ denotes the pointwise addition of $f$ and $-g$

From Negation Rule for Continuous Real-Valued Function:

$-g$ is a contiuous real-valued function
From Sum Rule for Continuous Real-Valued Functions

$f + \paren{-g}$ is a contiuous real-valued function
The result follows.
$\blacksquare$





