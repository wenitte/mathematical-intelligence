# 

Source: https://proofwiki.org/wiki/Different_Representations_to_Number_Base_represent_Different_Integers

Theorem
Let $k \in \Z$ such that $k \ge 2$.
Let $a$ and $b$ be representations of integers in base $k$ notation:

$a = \ds \sum_{j \mathop = 0}^r a_j k^j$
$b = \ds \sum_{j \mathop = 0}^s b_j k^j$
such that either:

$r \ne s$
or:

$\exists j \in \set {0, 1, \ldots, r}: a_j \ne b_j$

Then $a$ and $b$ represent different integers.


Proof
First suppose that $r \ne s$.
Without loss of generality, suppose $r > s$.
Then from Bounds for Integer Expressed in Base k:














\(\ds a_r k^r\)

\(>\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(>\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\ne\)







\(\ds b\)










Otherwise $r = s$.

Let $l$ be the largest such that $a_l \ne b_l$.
Without loss of generality, suppose $a_l > b_l$.
For all $j > l$, let $a_1 = a - a_j k_j$ and $b_1 = b - b_j k_j$.
As $a_j = b_j$ in this range, $a_j k_j = b_j k_j$ and so the same amount is being subtracted from both.
So consider $\paren {a_l - b_l} k_l$.
From Bounds for Integer Expressed in Base k:

$\paren {a_l - b_l} k_l > \ds \sum_{j \mathop = 0}^{l - 1} a_j k^j$
and:

$\paren {a_l - b_l} k_l > \ds \sum_{j \mathop = 0}^{l - 1} b_j k^j$
and so $a_1 > b_1$.
Hence:

$a_1 + a_j k_j > b_1 + b_j k_j$
Hence:

$a \ne b$
and hence the result.
$\blacksquare$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-2}$ The Basis Representation Theorem: Exercise $7$




