# 

Source: https://proofwiki.org/wiki/Parity_of_Integer_equals_Parity_of_Positive_Power



Theorem
Let $p \in \Z$ be an integer.
Let $n \in \Z_{>0}$ be a strictly positive integer.

Then $p$ is even if and only if $p^n$ is even.

That is, the parity of an integer equals the parity of all its (strictly) positive powers.


Proof
Proof by induction:
For all $n \in \Z_{> 0}$, let $P \left({n}\right)$ be the proposition:

For all $p \in \Z$, $p$ is even if and only if $p^n$ is even.

First it is worth confirming that $P \left({0}\right)$ does not hold:

$\forall p \in \Z: p^0 = 1$
which is not even whatever the parity of $p$.

$P \left({1}\right)$ is true, as this just says:

$p$ is even if and only if $p$ is even
which is a tautology.


Basis for the Induction
$P \left({2}\right)$ is the case:

$p$ is even if and only if $p^2$ is even
which is demonstrated in Parity of Integer equals Parity of its Square.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P \left({k}\right)$ is true, where $k \ge 2$, then it logically follows that $P \left({k+1}\right)$ is true.

So this is our induction hypothesis:

$p$ is even if and only if $p^k$ is even

Then we need to show:

$p$ is even if and only if $p^{k+1}$ is even


Induction Step
This is our induction step:
Let $p$ be even.
By the induction hypothesis, $p^k$ is also even.
Then:














\(\ds p\)

\(=\)







\(\ds 2 r\)





for some $r \in \Z$














\(\ds p^k\)

\(=\)







\(\ds 2 s\)





for some $s \in \Z$




and so:














\(\ds p^{k+1}\)

\(=\)







\(\ds p \cdot p^k\)




















\(\ds \)

\(=\)







\(\ds \left({2 r}\right) \left({2 s}\right)\)




















\(\ds \)

\(=\)







\(\ds 2 \left({2 r s}\right)\)









So $p^{k+1}$ is even.

Now suppose $p$ is not even (that is, odd).
By the induction hypothesis, $p^k$ is also not even (that is, odd).
Then:














\(\ds p\)

\(=\)







\(\ds 2 r + 1\)





for some $r \in \Z$














\(\ds p^k\)

\(=\)







\(\ds 2 s + 1\)





for some $s \in \Z$




and so:














\(\ds p^{k+1}\)

\(=\)







\(\ds p \cdot p^k\)




















\(\ds \)

\(=\)







\(\ds \left({2 r + 1}\right) \left({2 s + 1}\right)\)




















\(\ds \)

\(=\)







\(\ds 4 r s + 2 \left({r + s}\right) + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \left({2 r s + r + s}\right) + 1\)









So $p^{k+1}$ is not even (that is, odd).

So $P \left({k}\right) \implies P \left({k+1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

For all $n \in \Z_{>0}$, for all $p \in \Z$, $p$ is even if and only if $p^n$ is even.
$\blacksquare$





