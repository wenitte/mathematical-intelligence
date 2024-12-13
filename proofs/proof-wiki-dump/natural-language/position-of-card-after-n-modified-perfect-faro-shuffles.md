# 

Source: https://proofwiki.org/wiki/Position_of_Card_after_n_Modified_Perfect_Faro_Shuffles



Theorem
Let $D$ be a deck of cards $D$ of size $2 r$.
Let $C$ be a card in position $x$ of $D$.
Let $n$ modified perfect faro shuffles be performed on $C$.

Then $C$ will be in position $w$, where:

$w \equiv 2^n x \pmod {2 r + 1}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

After $n$ modified perfect faro shuffles, $C$ will be in position $a_n$ where $a_n \equiv 2^n x \pmod  {2 r + 1}$


Basis for the Induction
$\map P 1$ is the case:

After $1$ modified perfect faro shuffle, $C$ will be in position $a_1$ where $a_1 \equiv 2 x \pmod  {2 r + 1}$
which is the definition of a modified perfect faro shuffle.

Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

After $k$ modified perfect faro shuffles, $C$ will be in position $a_k$ where $a_k \equiv 2^k x \pmod  {2 r + 1}$

from which it is to be shown that:

After $k + 1$ modified perfect faro shuffles, $C$ will be in position $a_{k + 1}$ where $a_{k + 1} \equiv 2^{k + 1} x \pmod  {2 r + 1}$


Induction Step
This is the induction step:














\(\ds a_{k + 1}\)

\(\equiv\)







\(\ds 2 a_k\)

\(\ds \pmod {2 r + 1}\)



Basis for the Induction














\(\ds \)

\(\equiv\)







\(\ds 2 \paren {2^k x}\)

\(\ds \pmod {2 r + 1}\)



Induction Hypothesis














\(\ds \)

\(\equiv\)







\(\ds 2^{k + 1} x\)

\(\ds \pmod {2 r + 1}\)



Congruence of Product



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}$: after $n$ modified perfect faro shuffles, $C$ will be in position $a_n$ where $a_n \equiv 2^n x \pmod  {2 r + 1}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-3}$ Riffling




