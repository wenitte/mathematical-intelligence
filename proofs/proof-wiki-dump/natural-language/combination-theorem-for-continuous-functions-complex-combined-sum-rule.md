# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Complex/Combined_Sum_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions which are continuous on an open subset $S \subseteq \C$.
Let $\lambda, \mu \in \C$ be arbitrary complex numbers.

Then:

$\lambda f + \mu g$ is continuous on $S$.


Proof
By definition of continuous, we have that

$\forall c \in S: \ds \lim_{z \mathop \to c} \map f z = \map f c$
$\forall c \in S: \ds \lim_{z \mathop \to c} \map g z = \map g c$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{z \mathop \to c} \map f x = l$
$\ds \lim_{z \mathop \to c} \map g x = m$

From the Combined Sum Rule for Limits of Complex Functions, we have that:

$\ds \lim_{z \mathop \to c} \paren {\lambda \map f z + \mu \map g z} = \lambda l + \mu m$

So, by definition of continuous again, we have that $\lambda f + \mu g$ is continuous on $S$.
$\blacksquare$





