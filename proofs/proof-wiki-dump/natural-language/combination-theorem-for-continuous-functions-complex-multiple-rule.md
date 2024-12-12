# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Complex/Multiple_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions which are continuous on an open subset $S \subseteq \C$.
Let $\lambda \in \C$ be an arbitrary complex number.

Then:

$\lambda f$ is continuous on $S$.


Proof
By definition of continuous, we have that

$\forall c \in S: \ds \lim_{z \mathop \to c} \map f z = \map f c$

Let $f$ tend to the following limit:

$\ds \lim_{z \mathop \to c} \map f z = l$

From the Multiple Rule for Limits of Complex Functions, we have that:

$\ds \lim_{z \mathop \to c} \paren {\lambda \map f z} = \lambda l$

So, by definition of continuous again, we have that $\lambda f$ is continuous on $S$.
$\blacksquare$





