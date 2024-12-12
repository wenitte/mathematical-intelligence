# 

Source: https://proofwiki.org/wiki/Cardinal_of_Union_Equal_to_Maximum

Theorem
Let $S$ and $T$ be sets that are equinumerous to their cardinal number.
Let $\card S$ denote the cardinal number of $S$.
Suppose $S$ is infinite.

Then:

$\card {S \cup T} = \map \max {\card S, \card T}$


Proof
Let $x$ denote $\map \max {\card S, \card T}$.

$x = \card S$ if $\card T \le \card S$
$x = \card T$ if $\card S \le \card T$
By Relation between Two Ordinals:

$x = \card S$ or $x = \card T$
In either case, it follows by Subset of Union that:

$x \le \card {S \cup T}$
$\Box$

If $\card T  = 1$ or $\card T = 0$, it follows that $\card {S \cup T} = \card S = x$ by the definition of an infinite set.
If $1 < \card T$, then $\card {S \cup T} \le \card {S \times T}$ by Cardinal of Union Less than Cardinal of Cartesian Product.
But by Cardinal Product Equal to Maximum, it follows that $\card {S \cup T} \le x$.
$\Box$

Combining the two lemmas, it follows that $x = \card {S \cup T}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.35$




