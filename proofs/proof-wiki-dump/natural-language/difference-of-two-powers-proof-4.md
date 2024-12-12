# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Powers/Proof_4



Theorem
Let $\mathbb F$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \N$ such that $n \ge 2$.

Then for all $a, b \in \mathbb F$:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1} }\)











Proof
The proof will proceed by the Principle of Complete Finite Induction on $\Z_{>0}$.
Let $S$ be the set defined as:

$\ds S := \set {n \in \Z_{>0}: a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j}$
That is, $S$ is to be the set of all $n$ such that:

$\ds a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$


Basis for the Induction
We have that:

$\ds a^1 - b^1 = \paren {a - b} \sum_{j \mathop = 0}^0 a^{1 - 0 - 1} b^j$

So $1 \in S$.
This is the basis for the induction.


Induction Hypothesis
It is to be shown that if $r \in S$ for all $r$ such that $1 \le r \le k$, then it follows that $k + 1 \in S$.

This is the induction hypothesis:

$\forall r \in \Z_{>0}: 1 \le r \le k: \ds a^r - b^r = \paren {a - b} \sum_{j \mathop = 0}^{r - 1} a^{r - j - 1} b^j$

It is to be demonstrated that it follows that:

$\ds a^{k + 1} - b^{k + 1} = \paren {a - b} \sum_{j \mathop = 0}^k a^{k - j} b^j$


Induction Step
This is the induction step:















\(\ds a^{k + 1} - b^{k + 1}\)

\(=\)







\(\ds \paren {a + b} \paren {a^k - b^k} - a b \paren {a^{k - 1} - b^{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a + b} \paren {a - b} \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^j - a b \paren {a - b} \sum_{j \mathop = 0}^{k - 2} a^{k - j - 2} b^j\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\paren {a + b} \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^j - a b \sum_{j \mathop = 0}^{k - 2} a^{k - j - 2} b^j}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\sum_{j \mathop = 0}^{k - 1} a^{k - j} b^j + \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^{j + 1} - \sum_{j \mathop = 0}^{k - 2} a^{k - j - 1} b^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\sum_{j \mathop = 0}^{k - 1} a^{k - j} b^j + a^0 b^k}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^k a^{k - j} b^j\)










So $\forall r \in S: 0 \le r \le k: r \in S \implies k + 1 \in S$ and the result follows by the Principle of Complete Finite Induction:

$\forall n \in \Z_{>0}: \ds a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Problems $1.1$: $3$




