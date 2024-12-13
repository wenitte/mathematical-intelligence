# 

Source: https://proofwiki.org/wiki/Representatives_of_same_P-adic_Number_iff_Difference_is_Null_Sequence

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rational numbers $\Q$.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\sequence{\alpha_n}$ and $\sequence{\beta_n}$ be Cauchy sequences in $\struct {Q, \norm {\,\cdot\,}_p}$.

Then: 

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are representatives of the same $p$-adic number in $\Q_p$
if and only if:

the sequence $\sequence {\alpha_n - \beta_n}$ is a null sequence.


Proof
Let $\CC$ be the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}_p}$.
Let $\NN$ be the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}_p}$.
Then $\Q_p$ is the quotient ring $\CC \, \big / \NN$ by definition of the $p$-adic numbers.

Hence:

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are representatives of the same $p$-adic number in $\Q_p$
if and only if:

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are elements of the same left coset of $\NN$ in $\CC$.

From Element in Left Coset iff Product with Inverse in Subgroup:

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are elements of the same left coset of $\NN$ in $\CC$
if and only if: 

$\sequence {\alpha_n} - \sequence {\beta_n} = \sequence {\alpha_n - \beta_n} \in \NN$.
The result follows.
$\blacksquare$





