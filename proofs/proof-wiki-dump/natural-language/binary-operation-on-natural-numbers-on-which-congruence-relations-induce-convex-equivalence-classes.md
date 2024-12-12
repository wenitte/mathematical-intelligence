# 

Source: https://proofwiki.org/wiki/Binary_Operation_on_Natural_Numbers_on_which_Congruence_Relations_induce_Convex_Equivalence_Classes

Theorem
Let $\N$ denote the set of natural numbers: $\set {0, 1, 2, \ldots}$
Let $\circ$ be a binary operation on $\N$ with the following properties:

$\paren {\text O 1}: \quad$ $\circ$ has an identity element $e$
$\paren {\text O 2}: \quad$ Every equivalence relation $\RR$ on $\N$ whose equivalence classes are convex subsets of $\N$ is a congruence relation for $\circ$.

Then $\circ$ is the max operation on $\N$:

$\forall a, b \in \N: a \circ b = \max \set {a, b}$


Proof
Let $a, b \in \N$ where $e \le a < b$.
Let $\RR_1$ be an equivalence relation on $\N$ with equivalence classes:

$\closedint 0 {b - 1}, \set b, \hointr {b + 1} \infty$
By inspection, each of these equivalence classes are non-empty convex subsets of $\N$.
Hence $\RR_1$ is a congruence relation for $\circ$.
We have:

$\paren {e \mathrel {\RR_1} a} \land \paren {b \mathrel {\RR_1} b}$
Since $\RR_1$ is a congruence relation for $\circ$, we have:

$b = \paren {e \circ b} \mathrel {\RR_1} \paren {a \circ b}$
Since $\eqclass b {\RR_1} = \set b$, we have:

$a \circ b = b = \max \set {a, b}$
Similarly, we have:

$\paren {b \mathrel {\RR_1} b} \land \paren {a \mathrel {\RR_1} e}$
Since $\RR_1$ is a congruence relation for $\circ$, we have:

$\paren {b \circ a} \mathrel {\RR_1} \paren {b \circ e} = b$
Since $\eqclass b {\RR_1} = \set b$, we have:

$b \circ a = b = \max \set {a, b}$

Next we let $\RR_2$ be an equivalence relation on $\N$ with equivalence classes:

$\closedint 0 {b - 1}, \hointr b \infty$
By inspection, each of these equivalence classes are non-empty convex subsets of $\N$.
Hence $\RR_2$ is a congruence relation for $\circ$.
We have:

$\paren {e \mathrel {\RR_2} \paren {b - 1}} \land \paren {\paren {b - 1} \mathrel {\RR_2} \paren {b - 1}}$
Since $\RR_2$ is a congruence relation for $\circ$, we have:

$b - 1 = \paren {e \circ \paren {b - 1}} \mathrel {\RR_2} \paren {\paren {b - 1} \circ \paren {b - 1}}$
Since $\eqclass {b - 1} {\RR_2} = \closedint 0 {b - 1}$, we have:

$\paren {b - 1} \circ \paren {b - 1} \le \paren {b - 1}$
As the choice of $b - 1 \ge e$ is arbitrary, we can conclude:

$b \circ b \le b$
We also have:

$\paren {b \mathrel {\RR_2} b} \land \paren {b \mathrel {\RR_2} \paren {b + 1}}$
Since $\RR_2$ is a congruence relation for $\circ$, we have:

$\paren {b \circ b} \mathrel {\RR_2} \paren {b \circ \paren {b + 1}} = b + 1$
Since $\eqclass b {\RR_2} = \hointr b \infty$, we have:

$b \circ b \ge b$
Combining this with the previous result, we have:

$b \circ b = b$

By the Trichotomy Law, for any $m, n \in \N$ where $m, n \ge e$, we have one of the following:

$m > n \ge e$
$m = n \ge e$
$n > m \ge e$
and by the above, we have shown that in each case:

$m \circ n = \max \set {m, n}$

Now we will show that $e = 0$.
Aiming for a contradiction, suppose $e > 0$.
Let $\RR_3$ be an equivalence relation on $\N$ with equivalence classes:

$\set 0, \hointr 1 \infty$
By inspection, each of these equivalence classes are non-empty convex subsets of $\N$.
Hence $\RR_3$ is a congruence relation for $\circ$.
We have:

$\paren {0 \mathrel {\RR_3} 0} \land \paren {e \mathrel {\RR_3} b}$
Since $\RR_3$ is a congruence relation for $\circ$, we have:

$0 = \paren {0 \circ e} \mathrel {\RR_3} \paren {0 \circ b}$
Since $\eqclass 0 {\RR_3} = \set 0$, we have:

$0 = 0 \circ b$

Now note that:

$\paren {0 \mathrel {\RR_1} a} \land \paren {b \mathrel {\RR_1} b}$
Since $\RR_1$ is a congruence relation for $\circ$, we have:

$0 = \paren {0 \circ b} \mathrel {\RR_1} \paren {a \circ b} = b$
But $0 \not \mathrel {\RR_1} b$.
This is a contradiction.
Therefore we must have $e = 0$.
This implies that for any $m, n \in \N$, we must have $m, n \ge e$.
We have already shown that for any $m, n \ge e$, we have $m \circ n = \max \set {m, n}$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.20 \ \text {(b)}$




