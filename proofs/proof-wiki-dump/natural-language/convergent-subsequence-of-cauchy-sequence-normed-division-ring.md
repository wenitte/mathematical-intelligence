# 

Source: https://proofwiki.org/wiki/Convergent_Subsequence_of_Cauchy_Sequence/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\sequence{x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {R, \norm {\,\cdot\,} }$. 
Let $x \in R$.

Then $\sequence {x_n}$ converges to $x$ if and only if $\sequence {x_n}$ has a subsequence that converges to $x$.


Proof
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.

By the definition of a convergent sequence in a normed division ring then:

$\sequence {x_n}$ converges to $x$ in $\struct {R, \norm {\,\cdot\,} }$ if and only if $\sequence {x_n}$ converges to $x$ in $\struct {R, d}$.
By Convergent Subsequence of Cauchy Sequence in Metric Space:

$\sequence {x_n}$ converges to $x$ in $\struct {R, d}$ if and only if $\sequence {x_n}$ has a subsequence that converges to $x$ In $\struct {R, d}$.
By the definition of a convergent sequence in a normed division ring:

$\sequence {x_n}$ has a subsequence that converges to $x$ In $\struct {R, d}$ if and only if $\sequence {x_n}$ has a subsequence that converges to $x$ in $\struct {R, \norm {\,\cdot\,} }$.

The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields: Exercise $11$ $(2)$




