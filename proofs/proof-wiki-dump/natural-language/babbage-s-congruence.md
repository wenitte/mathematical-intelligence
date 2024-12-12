# 

Source: https://proofwiki.org/wiki/Babbage%27s_Congruence



Theorem
Let $p$ be a prime number.
Let $a, b \in \Z$ be integers.

Then:

$\dbinom {a p} {b p} \equiv \dbinom a b \pmod {p^2}$
where $\dbinom a b$ denotes a binomial coefficient.


Proof
By Lucas' Theorem, for $a, b \in \mathbb Z_{\ge 0}$:

$\dbinom {a p} {b p} \equiv \dbinom {\floor {a p / p}} {\floor {b p / p}} \dbinom {a \mod p} {b \mod p} \pmod p$
Proof by Mathematical Induction on $a$:
For all $a \in \Z$, let $\map P a$ be the proposition:

$\forall b \in \Z: \dbinom {a p} {b p} \equiv \dbinom a b \pmod {p^2}$


Basis for the Induction
$\map P 0$ is the case:

$\forall b \in \Z: \dbinom 0 {b p} \equiv \dbinom 0 b \pmod {p^2}$
For $b = 0$, we have $\dbinom 0 0 \equiv \dbinom 0 0 \pmod {p^2}$.
For $b \ne 0$, by Zero Choose n:

$\dbinom 0 {b p} = 0 = \dbinom 0 b \equiv \dbinom 0 b \pmod {p^2}$
Hence $\map P 0$ is true.

$\map P {-1}$ is the case:

$\forall b \in \Z: \dbinom {-p} {b p} \equiv \dbinom {-1} b \pmod {p^2}$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, then it logically follows that $\map P {k + 1}$ and $\map P {k - 1}$ are true.

So this is our induction hypothesis:

$\forall b \in \Z: \dbinom {k p} {b p} \equiv \dbinom k b \pmod {p^2}$

Then we need to show:

$\forall b \in \Z: \dbinom {\paren {k + 1} p} {b p} \equiv \dbinom {\paren {k + 1} } b \pmod {p^2}$
$\forall b \in \Z: \dbinom {\paren {k - 1} p} {b p} \equiv \dbinom {\paren {k - 1} } b \pmod {p^2}$


Induction Step
This is our induction step:
Let $r \in \Z$ and $0 < r < p$.
By Binomial Coefficient of Prime:

$\dbinom p r \equiv 0 \pmod p$
By Lucas' Theorem and Zero Choose n:

$\dbinom {k p} {b p - r} \equiv \dbinom {\floor {k p / p}} {\floor {\paren {b p - r} / p}} \dbinom {k p \bmod p} {b p - r \bmod p} \equiv \dbinom k {b - 1} \dbinom 0 {p - r} \equiv 0 \pmod p$
Therefore:

$(1): \dbinom {k p} {b p - r} \dbinom p r \equiv 0 \pmod {p^2}$

On the other hand, by Lucas' Theorem and Negated Upper Index of Binomial Coefficient:

$\dbinom {-p} r = \paren {-1}^r \dbinom {p + r - 1} r \equiv \paren {-1}^r \dbinom {\floor {\paren {p + r - 1} / p}} {\floor {r / p}} \dbinom {p + r - 1 \bmod p} {r \bmod p} \pmod p$
In particular, $\dbinom {p + r - 1 \bmod p} {r \bmod p} = \dbinom {r - 1 \bmod p} {r \bmod p}$.
Note that $r - 1 \bmod p < r \bmod p$ except when $r \bmod p = 0$.
Hence $\dbinom {-p} r \equiv 0 \pmod p$ except when $p \divides r$.
Therefore, for $p \nmid r$:

$(2): \dbinom {k p} {b p - r} \dbinom {-p} r \equiv 0 \pmod {p^2}$

Now, for $b \ge 0$:














\(\ds \binom {\paren {k + 1} p} {b p}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^{b p} \binom {k p} {b p - r} \binom p r\)





Chu-Vandermonde Identity














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^p \binom {k p} {b p - r} \binom p r\)





Definition of Binomial Coefficient: $\dbinom p r = 0$ for $r > p$














\(\ds \)

\(\equiv\)







\(\ds \binom {k p} {b p - 0} \binom p 0 + \binom {k p} {b p - p} \binom p p\)

\(\ds \pmod {p^2}\)



by $(1)$ above














\(\ds \)

\(\equiv\)







\(\ds \binom k b \times 1 + \binom k {b - 1} \times 1\)

\(\ds \pmod {p^2}\)



Induction Hypothesis, Binomial Coefficient with Zero, Binomial Coefficient with Self














\(\ds \)

\(\equiv\)







\(\ds \binom {k + 1} b\)

\(\ds \pmod {p^2}\)



Pascal's Rule














\(\ds \binom {\paren {k - 1} p} {b p}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^{b p} \binom {k p} {b p - r} \binom {-p} r\)





Chu-Vandermonde Identity














\(\ds \)

\(\equiv\)







\(\ds \sum_{r' \mathop = 0}^b \binom {k p} {b p - r' p} \binom {-p} {r' p}\)

\(\ds \pmod {p^2}\)



by $(2)$ above, using $r = r' p$














\(\ds \)

\(\equiv\)







\(\ds \sum_{r' \mathop = 0}^b \binom k {b - r'} \binom {-1} {r'}\)

\(\ds \pmod {p^2}\)



Induction Hypothesis and Base Case: $a = -1$














\(\ds \)

\(\equiv\)







\(\ds \binom {k - 1} b\)

\(\ds \pmod {p^2}\)



Chu-Vandermonde Identity




This needs considerable tedious hard slog to complete it.In particular: Since Lucas' Theorem restricts $a, b \ge 0$, the above may need to be revised for negative $b$ or $k$To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

So $\map P k \implies \map P {k + 1} \land \map P {k - 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\forall a, b \in \Z: \dbinom {a p} {b p} \equiv \dbinom a b \pmod {p^2}$
$\blacksquare$

Also see
Wolstenholme's Theorem


Source of Name
This entry was named for Charles Babbage.


Sources
1819: Charles Babbage: Demonstration of a theorem relating to prime numbers (The Edinburgh Philosophical Journal Vol. 1: pp. 46 – 49)




