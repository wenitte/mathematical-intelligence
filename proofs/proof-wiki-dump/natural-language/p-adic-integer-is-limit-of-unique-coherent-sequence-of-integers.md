# 

Source: https://proofwiki.org/wiki/P-adic_Integer_is_Limit_of_Unique_Coherent_Sequence_of_Integers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.

Then there exists a unique coherent sequence $\sequence {\alpha_n}$:

$\ds \lim_{n \mathop \to \infty} \alpha_n = x$


Proof
By the definition of a coherent sequence it needs to be proved that there exists a unique integer sequence $\sequence {\alpha_n}$:

$(1): \quad \forall n \in \N: \alpha_n \in \Z$ and $0 \le \alpha_n \le p^{n + 1} - 1$
$(2): \quad \forall n \in \N: \alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1}}$
$(3): \quad \ds \lim_{n \mathop \to \infty} \alpha_n = x$

By Integers are Arbitrarily Close to P-adic Integers then for all $n \in \N$ there exists $\alpha_n \in \Z$:

$\text {(a)}: \quad 0 \le \alpha_n \le p^{n + 1} - 1$
$\text {(b)}: \quad \norm {x - \alpha_n}_p \le p^{-\paren{n + 1} }$
Hence the sequence $\sequence {\alpha_n}$ satisfies $(1)$ above.


Lemma 1
$\forall n \in \N: \alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1}}$

Hence the sequence $\sequence {\alpha_n}$ satisfies $(2)$ above.


Lemma 2
$\ds \lim_{n \mathop \to \infty} \alpha_n = x$

Hence the sequence $\sequence {\alpha_n}$ satisfies $(3)$ above.


Lemma 3
$\sequence {\alpha_n}$ is a unique sequence satisfying properties $(1)$, $(2)$ and $(3)$ above.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.4 \ \text{(iii)}$




