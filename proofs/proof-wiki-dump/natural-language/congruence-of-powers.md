# 

Source: https://proofwiki.org/wiki/Congruence_of_Powers



Theorem
Let $a, b \in \R$ and $m \in \Z$.
Let $a$ be congruent to $b$ modulo $m$, that is:

$a \equiv b \pmod m$

Then:

$\forall n \in \Z_{\ge 0}: a^n \equiv b^n \pmod m$


Proof
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a \equiv b \implies a^k \equiv b^k \pmod m$

$\map P 0$ is trivially true, as $a^0 = b^0 = 1$.

$\map P 1$ is true, as this just says:

$a \equiv b \pmod m$


Basis for the Induction
$\map P 2$ is the case:

$a^2 \equiv b^2 \pmod m$
which follows directly from the fact that Modulo Multiplication is Well-Defined.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$a \equiv b \implies a^k \equiv b^k \pmod m$

Then we need to show:

$a \equiv b \implies a^{k + 1} \equiv b^{k + 1} \pmod m$


Induction Step
This is our induction step:
Suppose $a^k \equiv b^k \pmod m$.
Then $a^k a \equiv b^k b \pmod m$ by definition of modulo multiplication.
Thus $a^{k + 1} \equiv b^{k + 1} \pmod m$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_+: a \equiv b \implies a^n \equiv b^n \pmod m$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.4 \ \text{(ii)}$: Congruence modulo $m$ ($m \in \N$)




