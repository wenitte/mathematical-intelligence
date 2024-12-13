# 

Source: https://proofwiki.org/wiki/Rolle%27s_Theorem

  This article was Featured Proof between 15 May 2009 and 23 May 2009.




Theorem
Let $f$ be a real function which is:

continuous on the closed interval $\closedint a b$
and:

differentiable on the open interval $\openint a b$.
Let $\map f a = \map f b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = 0$


Proof 1
We have that $f$ is continuous on $\closedint a b$.
It follows from Continuous Image of Closed Interval is Closed Interval that $f$ attains:

a maximum $M$ at some $\xi_1 \in \closedint a b$
and:

a minimum $m$ at some $\xi_2 \in \closedint a b$.

Suppose $\xi_1$ and $\xi_2$ are both end points of $\closedint a b$.
Because $\map f a = \map f b$ it follows that $m = M$ and so $f$ is constant on $\closedint a b$.
Then, by Derivative of Constant, $\map {f'} \xi = 0$ for all $\xi \in \openint a b$.

Suppose $\xi_1$ is not an end point of $\closedint a b$.
Then $\xi_1 \in \openint a b$ and $f$ has a local maximum at $\xi_1$.
Hence the result follows from Derivative at Maximum or Minimum‎.

Similarly, suppose $\xi_2$ is not an end point of $\closedint a b$.
Then $\xi_2 \in \openint a b$ and $f$ has a local minimum at $\xi_2$.
Hence the result follows from Derivative at Maximum or Minimum‎.
$\blacksquare$


Proof 2
First take the case where:

$\forall x \in \openint a b: \map f x = 0$
Then:

$\forall x \in \openint a b: \map {f'} x = 0$

Otherwise:

$\exists c \in \openint a b: \map f c \ne 0$
Let $\map f c > 0$.
Then there exists an absolute maximum at a point $\xi \in \openint a b$.
Hence:














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\le\)







\(\ds 0\)





for $\xi < \xi + h < b$














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\ge\)







\(\ds 0\)





for $a < \xi + h < \xi$



As $h \to 0$, we see that both of the above approach $\map {f'} \xi$, which is then both non-negative and non-positive.
That is:

$\map {f'} \xi = 0$

Similarly, let $\map f c < 0$.
Then there exists an absolute minimum at a point $\xi \in \openint a b$.
Hence:














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\ge\)







\(\ds 0\)





for $\xi < \xi + h < b$














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\le\)







\(\ds 0\)





for $a < \xi + h < \xi$



Again, as $h \to 0$, we see that both of the above approach $\map {f'} \xi$, which is then both non-negative and non-positive.
That is:

$\map {f'} \xi = 0$

Hence the result.
$\blacksquare$


Also see
Extended Rolle's Theorem
Mean-Value Theorem


Source of Name
This entry was named for Michel Rolle.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Rolle's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Rolle's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Rolle's Theorem




