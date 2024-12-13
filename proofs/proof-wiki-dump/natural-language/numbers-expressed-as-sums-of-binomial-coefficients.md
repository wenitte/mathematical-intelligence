# 

Source: https://proofwiki.org/wiki/Numbers_Expressed_as_Sums_of_Binomial_Coefficients



Definition
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.

Then for all $k \in \Z_{> 0}$, it is possible to express $k$ uniquely in the form:














\(\ds k\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \dbinom {k_j} j\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k_1} 1 + \dbinom {k_2} 2 + \cdots + \dbinom {k_n} n\)









such that $0 \le k_1 < k_2 < \cdots < k_n$.


Proof
Existence of Representation
Proof by induction:
For all $k \in \Z_{\ge 0}$, let $\map P k$ be the proposition that it is possible to express $k$ in the form:

$\ds k = \sum_{j \mathop = 1}^n \dbinom {k_j} j$
such that $0 \le k_1 < k_2 < \cdots < k_n$.


Basis for the Induction
$\map P 0$ is true, as $\ds 0 = \sum_{j \mathop = 1}^n \dbinom {j - 1} j$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P m$ is true, where $r \ge 2$, then it logically follows that $\map P {m + 1}$ is true.

So this is our induction hypothesis:
$m$ can be expressed in the form:

$\ds m = \sum_{j \mathop = 1}^n \dbinom {m_j} j$
where $0 \le m_1 < m_2 < \cdots < m_n$.

Then we need to show:
$m + 1$ can be expressed in the form:

$\ds m = \sum_{j \mathop = 1}^n \dbinom {k_j} j$
where $0 \le k_1 < k_2 < \cdots < k_n$.


Induction Step
This is our induction step:
Suppose the first $c$ $m_j$ are consecutive, that is:

$\forall \, j \in \N: 1 \le j < c: m_{j + 1} - m_j = 1$ and $m_{c + 1} - m_c > 1$
Then:














\(\ds m + 1\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \dbinom {m_j} j + 1\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \sum_{j \mathop = 1}^c \dbinom {m_j} j + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \sum_{j \mathop = 1}^c \dbinom {m_1 + j - 1} j + \dbinom {m_1 + 0 - 1} 0\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {m_1 + c} c\)





Sum of r+k Choose k up to n














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {m_c - 1} c\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {m_c - 1} c + \sum_{j = 1}^{c - 1} \dbinom {j - 1} j\)









Since $0 \le m_1 < m_2 < \cdots < m_n$, we must have $m_j \ge j - 1$ for each $j \le n$.
Hence $0 \le 0 < 1 < \cdots < c - 2 < m_c - 1 < m_{c + 1} < \cdots < m_n$.
Thus the expression above satisfy the conditions.

So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: \sum_{k \mathop = 0}^n \binom {r + k} k = \binom {r + n + 1} n$
$\Box$


Uniqueness of Representation
Suppose $k$ can be expressed in the form:

$\ds k = \sum_{j \mathop = 1}^n \dbinom {k_j} j = \sum_{j \mathop = 1}^n \dbinom {m_j} j$
where $0 \le k_1 < k_2 < \cdots < k_n$ and $0 \le m_1 < m_2 < \cdots < m_n$.
Aiming for a contradiction, suppose $k_i$ and $m_i$ are not all equal.
Let $c$ be the largest integer such that $k_c \ne m_c$.
Without loss of generality assume $k_c < m_c$.
Then:














\(\ds k\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \dbinom {k_j} j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \sum_{j \mathop = 1}^c \dbinom {k_j} j\)




















\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \sum_{j \mathop = 1}^c \dbinom {k_c - c + j} j\)





$0 \le k_1 < k_2 < \cdots < k_n$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {k_c - c + c + 1} c - \dbinom {k_c - c} 0\)





Sum of r+k Choose k up to n














\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {m_c} c - 1\)





$k_c + 1 \le m_c$














\(\ds \)

\(<\)







\(\ds \sum_{j \mathop = c + 1}^n \dbinom {m_j} j + \dbinom {m_c} c\)




















\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 1}^n \dbinom {m_j} j\)





$\dbinom {m_j} j \ge 0$














\(\ds \)

\(=\)







\(\ds k\)









which is a contradiction.

Thus the representation is unique.
$\blacksquare$


Examples
Number base $3$
When $n = 3$ we have:














\(\ds 0\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 2 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 0\)





$(012)$














\(\ds 1\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 3 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 1\)





$(013)$














\(\ds 2\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 3 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 1\)





$(023)$














\(\ds 3\)

\(=\)

\(\, \ds \binom 1 1 + \binom 2 2 + \binom 3 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 1 + 1\)





$(123)$














\(\ds 4\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 4\)





$(014)$














\(\ds 5\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 4\)





$(024)$














\(\ds 6\)

\(=\)

\(\, \ds \binom 1 1 + \binom 2 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 1 + 4\)





$(124)$














\(\ds 7\)

\(=\)

\(\, \ds \binom 0 1 + \binom 3 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 3 + 4\)





$(034)$














\(\ds 8\)

\(=\)

\(\, \ds \binom 1 1 + \binom 3 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 3 + 4\)





$(134)$














\(\ds 9\)

\(=\)

\(\, \ds \binom 2 1 + \binom 3 2 + \binom 4 3 \, \)

\(\, \ds = \, \)



\(\ds 2 + 3 + 4\)





$(234)$














\(\ds 10\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 10\)





$(015)$














\(\ds 11\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 10\)





$(025)$














\(\ds 12\)

\(=\)

\(\, \ds \binom 1 1 + \binom 2 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 1 + 10\)





$(125)$














\(\ds 13\)

\(=\)

\(\, \ds \binom 0 1 + \binom 3 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 3 + 10\)





$(035)$














\(\ds 14\)

\(=\)

\(\, \ds \binom 1 1 + \binom 3 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 3 + 10\)





$(135)$














\(\ds 15\)

\(=\)

\(\, \ds \binom 2 1 + \binom 3 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 2 + 3 + 10\)





$(235)$














\(\ds 16\)

\(=\)

\(\, \ds \binom 0 1 + \binom 4 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 6 + 10\)





$(045)$














\(\ds 17\)

\(=\)

\(\, \ds \binom 1 1 + \binom 4 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 1 + 6 + 10\)





$(145)$














\(\ds 18\)

\(=\)

\(\, \ds \binom 2 1 + \binom 4 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 2 + 6 + 10\)





$(245)$














\(\ds 19\)

\(=\)

\(\, \ds \binom 3 1 + \binom 4 2 + \binom 5 3 \, \)

\(\, \ds = \, \)



\(\ds 3 + 6 + 10\)





$(345)$














\(\ds 20\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 6 3 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 20\)





$(016)$





Number base $4$
When $n = 4$ we have:














\(\ds 0\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 2 3 + \binom 3 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 0 + 0\)





$(0123)$














\(\ds 1\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 2 3 + \binom 4 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 0 + 1\)





$(0124)$














\(\ds 2\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 3 3 + \binom 4 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 1 + 1\)





$(0134)$














\(\ds 3\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 3 3 + \binom 4 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 1 + 1\)





$(0234)$














\(\ds 4\)

\(=\)

\(\, \ds \binom 1 1 + \binom 2 2 + \binom 3 3 + \binom 4 4 \, \)

\(\, \ds = \, \)



\(\ds 1 + 1 + 1 + 1\)





$(1234)$














\(\ds 5\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 2 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 0 + 5\)





$(0125)$














\(\ds 6\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 3 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 1 + 5\)





$(0135)$














\(\ds 7\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 3 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 1 + 5\)





$(0235)$














\(\ds 8\)

\(=\)

\(\, \ds \binom 1 1 + \binom 2 2 + \binom 3 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 1 + 1 + 1 + 5\)





$(1235)$














\(\ds 9\)

\(=\)

\(\, \ds \binom 0 1 + \binom 1 2 + \binom 4 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 0 + 4 + 5\)





$(0145)$














\(\ds 10\)

\(=\)

\(\, \ds \binom 0 1 + \binom 2 2 + \binom 4 3 + \binom 5 4 \, \)

\(\, \ds = \, \)



\(\ds 0 + 1 + 4 + 5\)





$(0245)$





Also see
Definition:Combinatorial Number System


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $56$




