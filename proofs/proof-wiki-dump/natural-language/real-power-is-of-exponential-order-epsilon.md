# 

Source: https://proofwiki.org/wiki/Real_Power_is_of_Exponential_Order_Epsilon

Theorem
Let: 

$f: \hointr 0 \to \to \R: t \mapsto t^r$
be $t$ to the power of $r$, for $r \in \R, r > -1$.

Then $f$ is of exponential order $\epsilon$ for any  $\epsilon > 0$ arbitrarily small in magnitude.


Proof
For $t > 0$, $t^r$ is continuous.
At $t = 0$, defining $0^r = 0$, the function is continuous from the right:














\(\ds \lim_{t \mathop \to 0^+} t^r\)

\(=\)







\(\ds \lim_{t \mathop \to 0^+} \map \exp {r \ln t}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\lim_{t \mathop \to 0^+} r \ln t}\)





Exponential Function is Continuous














\(\ds \)

\(=\)







\(\ds 0\)





Logarithm Tends to Negative Infinity, Exponential Tends to Zero and Infinity



Fix $t > 1$.
By the Axiom of Archimedes, there is a natural number $n$ such that $n > r$.
By Real Power Function on Base Greater than One is Strictly Increasing, $t^r < t^n$.
Recall from Polynomial is of Exponential Order Epsilon, $t^n < K e^{at}$ for any $a > 0$, arbitrarily small in magnitude.

Therefore the inequality $t^r < K e^{at}$ has solutions of the same nature.
$\blacksquare$





