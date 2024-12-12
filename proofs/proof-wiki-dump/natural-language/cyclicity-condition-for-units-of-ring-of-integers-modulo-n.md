# 

Source: https://proofwiki.org/wiki/Cyclicity_Condition_for_Units_of_Ring_of_Integers_Modulo_n



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $\struct {\Z / n \Z, +, \times}$ be the ring of integers modulo $n$.
Let $U = \struct {\paren {\Z / n \Z}^\times, \times}$ denote the group of units of $\struct {\Z / n \Z, +, \times}$.

Then $U$ is cyclic if and only if either:

$n = p^\alpha$
or:

$n = 2 p^\alpha$
where $p \ge 3$ is prime and $\alpha \ge 0$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sufficient Condition
Let $U$ be cyclic.
Let $n \ge 0$ be an integer.
Let $n = p_1^{e_1} \cdots p_r^{e_r}$, be the decomposition of $n$ into distinct prime powers given by the Fundamental Theorem of Arithmetic.
Then by Chinese Remainder Theorem: Corollary we have an isomorphism:

$\Z / n \Z \simeq \Z / p_1^{e_1} \Z \times \cdots \times \Z / p_r^{e_r} \Z$
By Units of Ring Direct Product are Ring Direct Product of Units we have:

$\paren {\Z / n \Z}^\times \simeq \paren {\Z / p_1^{e_1} \Z}^\times \times \cdots \times \paren {\Z / p_r^{e_r} \Z}^\times$
Suppose that $r \ge 2$, and choose $i, j \in \set {1, \ldots, r}$ such that $i \ne j$.

Now $\paren {\Z / n \Z}^\times$ has a subgroup

$\set {a \in \paren {\Z / n \Z}^\times: a \equiv 1\bmod p_k^{e_k}\text{ for all } k \ne i, k \in \set {1, \ldots, r}}$
which is isomorphic to $\paren {\Z / p_i^{e_i} \Z}^\times$.
By Subgroup of Cyclic Group is Cyclic, if $\paren {\Z / p_i^{e_i} \Z}^\times$ or $\paren {\Z / p_j^{e_j} \Z}^\times$ is not cyclic, then $\paren {\Z / n \Z}^\times$ cannot be cyclic.
Therefore suppose that $\paren {\Z / p_i^{e_i} \Z}^\times$ and $\paren {\Z / p_j^{e_j} \Z}^\times$ are cyclic.
By Order of Group of Units of Integers Modulo n these groups have orders:

$\map \phi {p_i^{e_i} }$
and:

$\map \phi { p_j^{e_j} }$
respectively, where $\phi$ is the Euler $\phi$ function.
By Euler Phi Function of Integer we have:

$\map \phi {p_i^{e_i} } = p_i^{e_i - 1} \paren {p_i - 1}$
and

$\map \phi {p_j^{e_j} } = p_j^{e_j - 1} \paren {p_j - 1}$
If $p_i, p_j$ are odd, $2$ divides $p_i - 1$ and $p_j - 1$.
Therefore $2$ divides $\map \phi {p_i^{e_i} }$ and $\map \phi {p_j^{e_j} }$.
In particular, $\map \phi {p_i^{e_i} }$ and $\map \phi {p_j^{e_j} }$ are not coprime.
Now by Group Direct Product of Cyclic Groups, $\paren {\Z / n \Z}^\times$ is not cyclic.

Let $p_i$ or $p_j$ be even.
Without loss of generality, we can assume $p_i = 2$.
Then:

$\map \phi {p_i^{e_i} } = \map \phi {2^{e_i} } = p_i^{e_i - 1} \paren {p_i - 1}$
So if $e_i \ge 2$, then $2$ divides $\map \phi {p_i^{e_i} }$ and $\map \phi {p_j^{e_j} }$.
In particular $\map \phi {p_i^{e_i} }$ and $\map \phi {p_j^{e_j} }$ are not coprime.
Again by Group Direct Product of Cyclic Groups, $\paren {\Z / n \Z}^\times$ is not cyclic.

Thus if $\paren {\Z / n \Z}^\times$ is cyclic, then $n = 2^e \times p^\alpha$ with $e = 0$ or $e = 1$, $\alpha \ge 0$ and $p \ge 3$ prime.
$\Box$


Necessary Condition
We need to prove $\paren {\Z / p^\alpha \Z}^\times$ and $\paren {\Z / 2 p^\alpha \Z}^\times$ are cyclic.
By Chinese Remainder Theorem: Corollary we have an isomorphism:

$\Z / 2 p^\alpha \Z \simeq \Z / 2 \Z \times \Z / p^\alpha \Z$
By Units of Ring Direct Product are Ring Direct Product of Units we have:

$\paren {\Z / 2 p^\alpha \Z}^\times \simeq \paren {\Z / 2 \Z}^\times \times \paren {\Z / p^\alpha \Z}^\times$
But $\paren {\Z / 2 \Z}^\times$ is trivial group, we have:

$\paren {\Z / 2 p^\alpha \Z}^\times \simeq \paren {\Z / p^\alpha \Z}^\times$
So we only need to prove $\paren {\Z / p^\alpha \Z}^\times$ is cyclic.
Case $\alpha = 1$ follows from Ring of Integers Modulo Prime is Field and Group of Units of a Finite Field is Cyclic.


Next we handle $\alpha \ge 2$.
The case $\alpha = 2$ is proved in Group of Units Ring of Integers Modulo $p^2$ is Cyclic.
Let $g$ be a generator of $\paren {\Z / p^2 \Z}^\times$,
then the order of $g$ in $\paren {\Z / p^2 \Z}^\times$ is $p \paren{p - 1}$.
We will prove that $g$ generates $\paren {\Z / p^\alpha \Z}^\times$.

Write $\map {\text{ord}_{p^\alpha}} g$ as the order of $g$ in $\paren {\Z / p^\alpha \Z}^\times$.
Note that

$g^{\map {\text{ord}_{p^\alpha}} g} \equiv 1 \pmod{p^\alpha}$
and $\alpha \ge 2$, so

$g^{\map {\text{ord}_{p^\alpha}} g} \equiv 1 \pmod{p^2}$
so

$p \paren{p - 1} \divides \map {\text{ord}_{p^\alpha}} g$.
Also, by Lagrange's Theorem,




\(\text {(⋆)}: \quad\)









\(\ds \map {\text{ord}_{p^\alpha} } g\)

\(\divides \order {\paren {\Z / p^\alpha \Z}^\times}\)







\(\ds \)

\(\ds = p^{\alpha - 1} \paren{p - 1}\)







Thus

$\map {\text{ord}_{p^\alpha}} g = p^{\map e \alpha} \paren{p - 1}$ for some $\map e \alpha$, $1 \leq \map e \alpha \leq \alpha - 1$.
To show $g$ generates $\paren {\Z / p^\alpha \Z}^\times$, it suffices to show that

$\map e \alpha = \alpha - 1$
but $\map e \alpha \leq \alpha - 1$, so it suffices to show that

$\map e \alpha \nleq \alpha - 2$
in other words




\(\text {(1)}: \quad\)









\(\ds g^{p^{\alpha - 2} \paren{p - 1} }\)

\(\not \equiv\)







\(\ds 1 \pmod{p^\alpha}\)









We will prove this by induction on $\alpha$.

Induction Hypothesis
(1) is true for all $\alpha \ge 2$.

Basis for the Induction
By definition, the order of $g$ in $\paren {\Z / p^2 \Z}^\times$ is $p \paren{p - 1}$.
Since $p - 1 < p \paren{p - 1}$,

$g^{p - 1} \not \equiv 1 \pmod{p^2}$
which proves (1) for $\alpha = 2$.

Induction Step
Suppose it is true for $\alpha = r \ge 2$.
From ($\star$),

$g^{p^{r - 2} \paren{p - 1}} \equiv 1 \pmod{p^{r - 1}}$
From (1) for $\alpha = r$:

$g^{p^{r - 2} \paren{p - 1}} \not \equiv 1 \pmod{p^r}$
so

$g^{p^{r - 2} \paren{p - 1}} = 1 + t p^{r - 1}$
for some $t$ not divisible by $p$.
Consider $\alpha = r + 1$.
By binomial expansion,














\(\ds g^{p^{r - 1} \paren{p - 1} }\)

\(=\)







\(\ds \paren{1 + t p^{r - 1} }^p\)




















\(\ds \)

\(=\)







\(\ds 1 + t p^r + \underbrace{\binom{p}{2} t^2 p^{2 \paren{r - 1} } }_{\text{divisible by } p^{r + 1} } + \sum_{j \ge 3} \binom p j t^j p^{j \paren{r - 1} }\)





since $p \divides \binom p 2$ (for $p>2$), and $1 + 2 \paren {r-1} \geq r+1$ (for $r \ge 2$), so $p^{r + 1} \divides \binom p 2 p^{2 \paren {r-1} }$














\(\ds \)

\(\equiv\)







\(\ds 1 + t p^r + \sum_{j \ge 3} \underbrace{\binom p j t^j p^{j \paren{r - 1} } }_{\text{divisible by } p^{r + 1} }\)





For $j \ge 3$, each term is divisible by $p^{3 \paren{r - 1} }$, and $3 \paren {r - 1} \ge r + 1$ (for $r \ge 2$)














\(\ds \)

\(\equiv\)







\(\ds 1 + \underbrace{t p^r}_{\text{not divisible by } p^{r + 1} }\)





as $t$ is not divisible by $p$














\(\ds \)

\(\not \equiv\)







\(\ds 1 \pmod{p^{r + 1} }\)









This proves the inductive step.
Hence the result by induction.
$\blacksquare$





