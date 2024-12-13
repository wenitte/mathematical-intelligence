# 

Source: https://proofwiki.org/wiki/Odd_Power_Function_is_Strictly_Increasing/General_Result

Theorem
Let $\struct {R, +, \circ, \le}$ be a totally ordered ring.
Let $n$ be an odd positive integer.
Let $f: R \to R$ be the mapping defined by:

$\map f x = \map {\circ^n} x$
Then $f$ is strictly increasing on $R$.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $x, y \in R$ such that $0 < x < y$.
By Power Function is Strictly Increasing on Positive Elements:

$\map f x < \map f y$
Suppose that $x < y < 0$.
By Properties of Ordered Ring:

$0 < -y < -x$
By Power Function is Strictly Increasing on Positive Elements (applied to $-y$ and $-x$):

$0 < \map f {-y} < \map f {-x}$
By Power of Ring Negative:

$\map f {-x} = -\map f x$
$\map f {-y} = -\map f y$
Thus:

$0 < -\map f y < -\map f x$
By Properties of Ordered Ring:

$\map f x < \map f y$
By Sign of Odd Power:

$\map f x < 0 = \map f 0$ when $x < 0$
$\map f 0 = 0 < \map f x$ when $0 < x$
Thus we have shown that $f$ is strictly increasing on the positive elements and the negative elements, and across zero.
$\blacksquare$





