# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Complex_Analysis)/Corollary_1

Corollary to Liouville's Theorem (Complex Analysis)
Let $f: \C \to \C$ be an entire function such that: 

$\size {\map f z} \ge M$
for all $z \in \C$ for some real constant $M > 0$. 

Then $f$ is constant.


Proof
Note that since:

$\size {\map f z} \ge M > 0$
we cannot have: 

$\map f {z_0} = 0$
for any $z_0 \in \C$.
So, by the Quotient Rule for Complex Derivatives, we have: 

$\dfrac 1 f$ is entire.
We also have that: 

$\ds \size {\frac 1 {\map f z} } \le \frac 1 M$
for all $z \in \C$. 
So:

$\dfrac 1 f$ is a bounded entire function.
So, by Liouville's Theorem (Complex Analysis), we have: 

$\dfrac 1 f$ is constant.
That is, there exists some $C \in \C \setminus \set 0$ such that: 

$\dfrac 1 {\map f z} = C$
for all $z \in \C$. 
Then, we have: 

$\map f z = \dfrac 1 C$
for all $z \in \C$. 
So $f$ is constant.
$\blacksquare$





