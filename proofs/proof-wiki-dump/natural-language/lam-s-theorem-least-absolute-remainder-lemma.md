# 

Source: https://proofwiki.org/wiki/Lam%C3%A9%27s_Theorem/Least_Absolute_Remainder/Lemma



Theorem
Let $a, b \in \Z_{>0}$ be (strictly) positive integers.
Let the Euclidean Algorithm: Least Absolute Remainder variant be employed to find the GCD of $a$ and $b$.
Suppose it takes $n$ cycles around the Euclidean Algorithm: Least Absolute Remainder variant to find $\gcd \set {a, b}$.
Then $\min \set {a, b} \ge P_{n + 1}$, where $P_n$ denotes the $n$-th Pell number.


Proof
Without loss of generality suppose $a \ge b$.
Let $q_i, r_i$ be the quotients and remainders of each step of the Euclidean Algorithm: Least Absolute Remainder variant, that is:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1\)




















\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)




















\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3\)




















\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + r_n\)




















\(\ds r_{n - 1}\)

\(=\)







\(\ds q_{n + 1} r_n + 0\)









so $r_n = \gcd \set {a, b}$.

Note that for each $3 \le k \le n$, we have:

$r_{k - 2} = q_k r_{k - 1} + r_k$
From definition we have:

$-\dfrac {\size {r_{k - 1}}} 2 < r_k \le \dfrac {\size {r_{k - 1}}} 2$
which implies:




\(\text {(1)}: \quad\)









\(\ds \size {r_k}\)

\(\le\)







\(\ds \frac {\size {r_{k - 1} } } 2\)









Also we have:














\(\ds \size {r_{k - 2} }\)

\(=\)







\(\ds \size {q_k} \size {r_{k - 1} } \pm \size {r_k}\)





for some choice of $+$ or $-$








\(\ds \leadsto \ \ \)





\(\ds \size {q_k}\)

\(=\)







\(\ds \frac {\size {r_{k - 2} } \pm \size {r_k} } {\size {r_{k - 1} } }\)




















\(\ds \)

\(\ge\)







\(\ds \frac {\size {r_{k - 2} } - \size {r_k} } {\size {r_{k - 1} } }\)




















\(\ds \)

\(\ge\)







\(\ds \frac {2 \size {r_{k - 1} } - \frac {\size {r_{k - 1} } } 2} {\size {r_{k - 1} } }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 3 2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \size {q_k}\)

\(\ge\)







\(\ds 2\)





as $\size {q_k}$ is an integer




Now we prove that $\size {r_{n - m}} \ge P_{m + 1}$ for $0 \le m < n$ by the Principle of Mathematical Induction:


Basis for the Induction
When $m = 0$, we have:














\(\ds \size {r_n}\)

\(=\)







\(\ds \size {\gcd \set {a, b} }\)





Euclidean Algorithm














\(\ds \)

\(\ge\)







\(\ds 1\)





Greatest Common Divisor is at least $1$














\(\ds \)

\(=\)







\(\ds P_1\)





Definition of Pell Numbers



When $m = 1$, we have:














\(\ds \size {r_{n - 1} }\)

\(\ge\)







\(\ds 2 \size {r_n}\)





from $(1)$














\(\ds \)

\(\ge\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds P_2\)





Definition of Pell Numbers



These are our base cases.


Induction Hypothesis
This is our induction hypothesis:

$\size {r_{n - k + 2}} \ge P_{k - 1}$
$\size {r_{n - k + 1}} \ge P_k$
for some $k$ where $2 \le k < n$.
It is to be demonstrated that:

$\size {r_{n - k}} \ge P_{k + 1}$


Induction Step
This is our induction step:
We have:

$r_{n - k} = q_{n - k + 2} r_{n - k + 1} + r_{n - k + 2}$
and:

$\size {r_{n - k}} = \size {q_{n - k + 2} } \size {r_{n - k + 1} } \pm \size {r_{n - k + 2}}$
for some choice of $+$ or $-$.

By $(2)$, we have $\size {q_{n - k + 2}} \ge 2$.
For the case $\size {q_{n - k + 2}} \ge 3$:














\(\ds \size {r_{n - k} }\)

\(\ge\)







\(\ds 3 \size {r_{n - k + 1} } - \size {r_{n - k + 2} }\)




















\(\ds \)

\(\ge\)







\(\ds 2 \size {r_{n - k + 1} } + \size {r_{n - k + 2} }\)





from $(1)$



For the case $\size {q_{n - k + 2}} = 2$, we have to show that $\size {r_{n - k} } = 2 \size {r_{n - k + 1} } + \size {r_{n - k + 2} }$.
In other words, we need to show that:

$\size {r_{n - k} } \ne 2 \size {r_{n - k + 1} } - \size {r_{n - k + 2} }$
We have:














\(\ds \size {r_{n - k} }\)

\(\ge\)







\(\ds 2 \size {r_{n - k + 1} }\)





from $(1)$














\(\ds \)

\(>\)







\(\ds 2 \size {r_{n - k + 1} } - \size {r_{n - k + 2} }\)





the case for $\size {r_{n - k + 2} }$ is covered in the $+$ case



Therefore, in both cases, we have:














\(\ds \size{r_{n - k} }\)

\(\ge\)







\(\ds 2 \size {r_{n - k + 1} } + \size {r_{n - k + 2} }\)




















\(\ds \)

\(\ge\)







\(\ds 2 P_k + P_{k - 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds P_{k + 1}\)





Definition of Pell Numbers



We have shown that the result for $m = k - 2$ and $m = k - 1$ implies the result for $m = k$.
Thus we have $r_{n - m} \ge P_{m + 1}$ for all $0 \le m < n$.

Since $b \ge 2 \size {r_1}$, we can apply the same argument as the induction step and obtain:














\(\ds b\)

\(\ge\)







\(\ds 2 \size {r_1} + \size {r_2}\)




















\(\ds \)

\(\ge\)







\(\ds 2 P_n + P_{n - 1}\)





the result above














\(\ds \)

\(=\)







\(\ds P_{n + 1}\)





Definition of Pell Numbers



$\blacksquare$





