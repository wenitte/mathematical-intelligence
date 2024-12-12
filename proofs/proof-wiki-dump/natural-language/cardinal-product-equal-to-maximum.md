# 

Source: https://proofwiki.org/wiki/Cardinal_Product_Equal_to_Maximum

Theorem
Let $S$ and $T$ be sets that are equinumerous to their cardinal number.
Let $\card S$ denote the cardinal number of $S$.
Suppose $S$ is infinite.
Suppose $T > 0$.

Then:

$\card {S \times T} = \map \max {\card S, \card T}$


Proof
Let $x$ denote $\map \max {\card S, \card T}$.
Then by Cartesian Product Preserves Cardinality:

$S \times T \sim \card S \times \card T$
Let $f: S \times T \to \card S \times \card T$ be a bijection.
It follows that $f: S \times T \to x \times x$ is an injection.

Hence:














\(\ds \card {S \times T}\)

\(\le\)







\(\ds \card {x \times x}\)





Injection iff Cardinal Inequality














\(\ds \)

\(=\)







\(\ds \card x\)





Non-Finite Cardinal is equal to Cardinal Product














\(\ds \)

\(\le\)







\(\ds x\)





Cardinal Number Less than Ordinal: Corollary



Therefore:

$\card {S \times T} \le x$
$\Box$

Conversely:

$x = \card S$ if $\card T \le \card S$
and:

$x = \card T$ if $\card S \le \card T$
By Relation between Two Ordinals:

$x = \card S$ or $x = \card T$
It follows by Set Less than Cardinal Product that:

$x \le \card {S \times T}$
$\Box$

Combining the two lemmas, it follows that:

$x = \card {S \times T}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.35$




