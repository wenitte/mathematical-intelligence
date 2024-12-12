# 

Source: https://proofwiki.org/wiki/Existence_of_Smooth_Transition_Function_in_One_Dimension/Lemma



Theorem
Define $f : \R \to \R$ by:

$\ds \map f x = \begin{cases}e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$
for each $x \in \R$.

Then $f$ is smooth with:

$\ds \map {f^{(n)} } x = \begin{cases}\map {P_n} {\frac 1 x} e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$
for each $n \ge 1$, for some polynomial $P_n$. 


Proof
We proceed by Proof by Mathematical Induction.
For $n \ge 1$, let $\map Q n$ be the proposition:

$f$ is $n$ times differentiable and there exists a polynomial $P_n$ with positive leading coefficient such that:
$\ds \map {f^{(n)} } x = \begin{cases}\map {P_n} {\frac 1 x} e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$


Basis for the Induction
From Derivative of Constant, $f$ is differentiable with $\map {f'} x = 0$ for $x < 0$. 
From the Chain Rule, Derivative of Power and Derivative of Exponential Function, we have $\map {f'} x = x^{-2} e^{-1/x}$ for $x > 0$.
The only point of concern is $x = 0$.
For $h < 0$, we have:

$\ds \frac {\map f h} h = 0$
and hence:

$\ds \lim_{h \to 0^-} \frac {\map f h - \map f 0} h = 0$
For $h > 0$, we have:

$\ds \frac {\map f h} h = \frac {e^{-1/h} } h$
From Power Series Expansion for Exponential Function, we have:

$\ds e^{1/h} = \sum_{k \mathop = 0}^\infty \frac 1 {k!} \paren {\frac 1 h}^k \ge \frac 1 {2 h^2}$
for $h > 0$.
Hence:

$\ds 0 \le \frac 1 h e^{-1/h} \le \frac 1 h \paren {2 h^2} = 2 h$
Taking $h \to 0^+$ and applying the Squeeze Theorem, we conclude that:

$\ds \lim_{h \mathop \to 0} \frac {\map f h - \map f 0} h = 0$
and so $\map {f'} 0 = 0$.
Hence:

$\ds \map {f'} x = \begin{cases}\frac 1 {x^2} e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$
and so $\map P 1$ holds with $\map {P_1} x = x^2$.


Induction Hypothesis
We need to show that if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true. 

So this is our induction hypothesis:

$f$ is $n$ times differentiable and there exists a polynomial $P_n$ with positive leading coefficient such that:
$\ds \map {f^{(n)} } x = \begin{cases}\map {P_n} {\frac 1 x} e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$


Induction Step
Again, from Derivative of Constant, $f$ is differentiable with $\map {f^{(n + 1)} } x = 0$ for $x < 0$. 
From the Chain Rule, Derivative of Power and Derivative of Exponential Function, we have:

$\ds \map {f^{(n + 1)} } x = -\frac 1 {x^2} \map {P_n'} {\frac 1 x} e^{-1/x} + \frac 1 {x^2} \map {P_n} {\frac 1 x} e^{-1/x}$
for $x > 0$. 
We would like to set:

$\map {P_{n + 1} } x = -x^2 \map {P_n'} x + x^2 \map {P_n} x$
so that $\map {f^{(n + 1)} } x = \map {P_{n + 1} } x e^{-1/x}$ for $x > 0$.
Let $N = \deg P_n$ be the degree of $P_n$.
We can write:

$\ds \map {P_n} x = \sum_{j \mathop = 0}^N a_j x^j$
By hypothesis, $a_N \ge 0$. 
Then we have:

$\ds \map {P'_n} x = \sum_{j \mathop = 0}^{N - 1} \paren {j + 1} a_{j + 1} x^j$
Hence we have:

$\ds \map {Q_n} x = a_N x^{N + 2} + \sum_{j \mathop = 0}^{N - 1} a_j x^{j + 2} - \sum_{j \mathop = 0}^{N - 1} \paren {j + 1} a_{j + 1} x^{j + 2}$
This has leading coefficient $a_N \ge 0$.
We now verify that $\map {f^{(n)} } 0 = 0$. 
We have:

$\ds \lim_{h \mathop \to 0^-} \frac {\map {f^{(n)} } h - \map {f^{(n)} } 0} h = 0$
Hence we only need to concern ourselves with $h > 0$.
We can write:

$\ds \map {P_n} {\frac 1 x} = \sum_{j \mathop = 0}^N a_j \paren {\frac 1 x}^j$
Then:

$\ds x^{N + 1} \map {P_n} {\frac 1 x} = \sum_{j \mathop = 0}^N a_j x^{N + 1 - j}$
The left hand side has no constant term, so we have:

$\ds \lim_{x \mathop \to 0} h^{N + 1} \map {P_n} {\frac 1 h} = 0$
From Power Series Expansion for Exponential Function again, we have:

$\ds e^{1/h} \ge \frac 1 {\paren {N + 2}! h^{N + 2} }$
for $h > 0$, so that:

$\ds 0 \le e^{-1/h} \le \paren {N + 2}! h^{N + 2}$
Since $P_n$ has positive leading coefficient, we have $\map {P_n} x \to \infty$ as $x \to \infty$ by Limit of Polynomial Function. 
Hence $\map {P_n} x > 0$ for all $x > M$, for some $M > 0$. 
Hence $\map {P_n} {1/h} > 0$ for $h < 1/M$.
Then for $h < 1/M$ we have:

$\ds 0 \le \frac {e^{-1/h} } h \map {P_n} {1/h} \le \paren {N + 2}! h^{N + 1} \map {P_n} {\frac 1 h}$
We have:

$\ds \lim_{h \to 0} \paren {N + 2}! h^{N + 1} \map {P_n} {\frac 1 h} = 0$
Hence by the Squeeze Theorem, we have:

$\ds \lim_{h \to 0^+} \frac {e^{-1/h} } h \map {P_n} {1/h} = 0$
Hence $\map {f^{(n + 1)} } 0 = 0$.
$\blacksquare$





