# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_not_less_than_Order_of_Power

Theorem
Let $\left({G, \circ}\right)$ be a group whose identity is $e$.
Let $g \in G$ be an element of $g$.
Let $\left\lvert{g}\right\rvert$ denote the order of $g$ in $G$.

Then:

$\forall m \in \Z: \left\lvert{g^m}\right\rvert \le \left\lvert{g}\right\rvert$
where $g^m$ denotes the $m$th power of $g$ in $G$.


Proof 1
Let $\left\lvert{g}\right\rvert = n$.

Then from Order of Power of Group Element:

$\forall m \in \Z: \left\lvert{g^m}\right\rvert = \dfrac n {\gcd \left\{ {m, n}\right\} }$
where $\gcd \left\{ {m, n}\right\}$ denotes the greatest common divisor of $m$ and $n$.
The result follows from Greatest Common Divisor is at least 1.
$\blacksquare$


Proof 2
Let $g^n = e$.
Let $h = g^m$.
Then:

$h^n = g^{m n} = \paren {g^n}^m = e^m = e$
Hence by definition of order of group element:

$\order h \le n$
Hence the result.
$\blacksquare$





