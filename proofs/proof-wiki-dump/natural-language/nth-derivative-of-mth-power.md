# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Mth_Power



Theorem
Let $m \in \Z$ be an integer such that $m \ge 0$.
The $n$th derivative of $x^m$ with respect to $x$ is:

$\dfrac {\d^n} {\d x^n} x^m = \begin{cases} m^{\underline n} x^{m - n} & : n \le m \\ 0 & : n > m \end{cases}$
where $m^{\underline n}$ denotes the falling factorial.


Corollary
$\dfrac {\d^n} {\d x^n} x^n = n!$
where $n!$ denotes $n$ factorial.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\dfrac {\d^n} {\d x^n} x^m = \begin{cases} m^{\underline n} x^{m - n} & : n \le m \\ 0 & : n > m \end{cases}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$\dfrac {\d} {\d x} x^m = m x^{m - 1}$
This follows by Power Rule for Derivatives, which also includes the case:

$\dfrac {\d} {\d x} x^0 = 0$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\dfrac {\d^k} {\d x^k} x^m = \begin{cases} m^{\underline k} x^{m - k} & : k \le m \\ 0 & : k > m \end{cases}$

Then we need to show:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } x^m = \begin{cases} m^{\underline {k + 1} } x^{m - \paren {k + 1} } & : k + 1 \le m \\ 0 & : k + 1 > m \end{cases}$


Induction Step
This is our induction step:
First, let $k < m$. Then we have:














\(\ds \frac {\d^{k + 1} } {\d x^{k + 1} } x^m\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\frac {\d^k} {\d x^k} x^m}\)




















\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d x} } {m^{\underline k} x^{m - k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds m^{\underline k} \map {\frac \d {\d x} } {x^{m - k} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds m^{\underline k} \paren {m - k} \paren {x^{m - k - 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds m^{\underline {k + 1} } x^{m - \paren {k + 1} }\)





Definition of Falling Factorial




At this stage, as $k < m$, we have that $k+1 \le m$. So far so good.

Now suppose that $k = m$.
Then by the induction hypothesis:

$\dfrac {\d^k} {\d x^k} x^m = m^{\underline k} x^0 = m!$
Then by Derivative of Constant:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } x^m = \dfrac \d {\d x} m! = 0$
At this stage, as $k = m$, we have that $k + 1 > m$. Again, so far so good.

Finally, suppose that $k > m$.
Then by the induction hypothesis:

$\dfrac {\d^k} {\d x^k} x^m = 0$
Then by Derivative of Constant:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } = 0$

At this stage, as $k > m$, we have that $k + 1 > m$.
This is all that is needed.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\dfrac {\d^n} {\d x^n} x^m = \begin{cases} m^{\underline n} x^{m - n} & : n \le m \\ 0 & : n > m \end{cases}$
$\blacksquare$





