# 

Source: https://proofwiki.org/wiki/Existence_of_Greatest_Common_Divisor/Proof_1



Theorem
Let $a, b \in \Z$ be integers such that $a \ne 0$ or $b \ne 0$.
Then the greatest common divisor of $a$ and $b$ exists.


Proof
Proof of Existence
This is proved in Greatest Common Divisor is at least $1$.
$\Box$


Proof of there being a Largest
Without loss of generality, suppose $a \ne 0$.
First we note that from Absolute Value of Integer is not less than Divisors:

$\forall c \in \Z: \forall a \in \Z_{>0}: c \divides a \implies c \le \size c \le \size a$
The same applies for $c \divides b$.

Now we have three different results depending on $a$ and $b$:














\(\ds a \ne 0 \land b \ne 0\)

\(\implies\)







\(\ds \gcd \set {a, b} \le \min \set {\size a, \size b}\)




















\(\ds a = 0 \lor b = 0\)

\(\implies\)







\(\ds \gcd \set {a, b} = \max \set {\size a, \size b}\)




















\(\ds a = b = 0\)

\(\implies\)







\(\ds \forall x \in \Z: x \divides a \land x \divides b\)










So if $a$ and $b$ are both zero, then any $n \in \Z$ divides both, and there is no greatest common divisor.
This is why the proviso that $a \ne 0 \lor b \ne 0$.

So we have proved that common divisors exist and are bounded above.
Therefore, from Set of Integers Bounded Above by Integer has Greatest Element there is always a greatest common divisor.
$\blacksquare$





