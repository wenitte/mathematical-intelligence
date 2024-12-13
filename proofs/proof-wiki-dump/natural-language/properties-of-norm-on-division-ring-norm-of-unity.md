# 

Source: https://proofwiki.org/wiki/Properties_of_Norm_on_Division_Ring/Norm_of_Unity

Theorem
Let $\struct {R, +, \circ}$ be a division ring with unity $1_R$.
Let $\norm {\,\cdot\,}$ be a norm on $R$.

Then:

$\norm {1_R} = 1$.


Proof
By Norm Axiom $\text N 2$: Multiplicativity:

$\forall x, y \in R: \norm {x \circ y} = \norm x \norm y$

In particular:

$\norm {1_R} = \norm {1_R \circ 1_R} = \norm {1_R} \norm {1_R}$

By Norm Axiom $\text N 1$: Positive Definiteness:

$\norm {1_R} \ne 0$

So $\norm {1_R}$ has an inverse in $R$.
Multiplying by this inverse:

$\norm {1_R} \norm {1_R} = \norm {1_R} \iff \norm {1_R} = 1$
as desired.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.2$: Basic Properties, Lemma $2.2.1 \ \text i)$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields, Theorem $1.6 \ \text {(a)}$




