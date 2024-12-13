# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem_for_Integrals/Proof_1

Theorem
Let $f$ be a continuous real function on the closed interval $\closedint a b$.
Then there exists a real number $k \in \closedint a b$ such that:

$\ds \int_a^b \map f x \rd x = \map f k \paren {b - a}$


Proof
From Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint a b$.
By the Extreme Value Theorem, there exist $m, M \in \closedint a b$ such that:

$\ds \map f m = \min_{x \mathop \in \closedint a b} \map f x$
$\ds \map f M = \max_{x \mathop \in \closedint a b} \map f x$
Then, from Darboux's Theorem:

$\ds \map f m \paren {b - a} \le \int_a^b \map f x \rd x \le \map f M \paren {b - a}$
Dividing all terms by $\paren {b - a}$ gives:

$\ds \map f m \le \frac 1 {b - a}\int_a^b \map f x \rd x \le \map f M$
By the Intermediate Value Theorem, there exists some $k \in \openint a b$ such that:














\(\ds \frac 1 {b - a} \int_a^b \map f x \rd x\)

\(=\)







\(\ds \map f k\)














\(\ds \leadsto \ \ \)





\(\ds \int_a^b \map f x \rd x\)

\(=\)







\(\ds \map f k \paren {b - a}\)









$\blacksquare$





