# 

Source: https://proofwiki.org/wiki/Congruence_of_Sum_of_Digits_to_Base_Less_1

  This article was Featured Proof between 19 January 2013 and 14 February 2013.




Theorem
Let $x \in \Z$, and $b \in \N, b > 1$.
Let $x$ be written in base $b$:

$x = \sqbrk {r_m r_{m - 1} \ldots r_2 r_1 r_0}_b$

Then:

$\ds \map {s_b} x = \sum_{j \mathop = 0}^m r_j \equiv x \pmod {b - 1}$
where $\map {s_b} x$ is the digit sum of $x$ in base $b$ notation.

That is, the digit sum of any integer $x$ in base $b$ notation is congruent to $x$ modulo $b - 1$.


Proof
Let $x \in \Z, x > 0$, and $b \in \N, b > 1$.
Then from the Basis Representation Theorem, $x$ can be expressed uniquely as:

$\ds x = \sum_{j \mathop = 0}^m r_j b^j, r_0, r_1, \ldots, r_m \in \set {0, 1, \ldots, b - 1}$

Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition $\ds \sum_{j \mathop = 0}^n r_j \equiv x \pmod {b - 1}$.


Basis for the Induction
$\map P 1$ is trivially true:

$\forall x: 0 \le x \le b: x \equiv x \pmod {b - 1}$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{j \mathop = 0}^k r_j \equiv \sum_{j \mathop = 0}^k r_j b^j \pmod {b - 1}$

Then we need to show:

$\ds \sum_{j \mathop = 0}^{k \mathop + 1} r_j \equiv \sum_{j \mathop = 0}^{k \mathop + 1} r_j b^j \pmod {b - 1}$


Induction Step
This is our induction step:
Let $y$ be expressed as:

$\ds y = \sum_{j \mathop = 0}^{k \mathop + 1} {r_j b^j}, r_0, r_1, \ldots, r_{k + 1} \in \set {0, 1, \ldots, b}$

Then:

$\ds y = \sum_{j \mathop = 0}^k r_j b^j + r_{k + 1} b^{k + 1}$

Now from Congruence of Powers:

$b \equiv 1 \pmod {b - 1} \leadsto b^n \equiv 1^n \pmod {b - 1} \leadsto b^n \equiv 1 \pmod {b - 1}$
So by modulo multiplication:

$r_{k + 1} b^{k + 1} \equiv r_{k + 1} \pmod {b - 1}$
From the induction hypothesis:

$\ds \sum_{j \mathop = 0}^{k \mathop + 1} r_j \equiv y \pmod {b - 1}$

Thus by modulo addition:

$\ds \sum_{j \mathop = 0}^{k \mathop + 1} r_j \equiv \sum_{j \mathop = 0}^k r_j + r_{k + 1} \pmod {b - 1}$

Hence $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction:

$\ds \sum_{j \mathop = 0}^n r_j \equiv \sum_{j \mathop = 0}^n r_j b^j \pmod {b - 1}$
$\blacksquare$





