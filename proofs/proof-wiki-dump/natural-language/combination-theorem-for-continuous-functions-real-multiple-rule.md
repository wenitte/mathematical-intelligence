# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Real/Multiple_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ and $g$ be real functions which are continuous on an open subset $S \subseteq \R$.
Let $\lambda \in \R$ be an arbitrary real number.

Then:

$\lambda f$ is continuous on $S$.


Proof
By definition of continuous, we have that

$\forall c \in S: \ds \lim_{x \mathop \to c} \map f x = \map f c$

Let $f$ tend to the following limit:

$\ds \lim_{x \mathop \to c} \map f x = l$

From the Multiple Rule for Limits of Real Functions, we have that:

$\ds \lim_{x \mathop \to c} \paren {\lambda \map f x} = \lambda l$

So, by definition of continuous again, we have that $\lambda f$ is continuous on $S$.
$\blacksquare$





