# 

Source: https://proofwiki.org/wiki/Schwarz%27s_Lemma



Theorem
Let $D$ be the unit disk centred at $0$.
Let $f: D \to \C$ be a holomorphic function.
Let $\map f 0 = 0$ and $\cmod {\map f z} \le 1$ for all $z \in D$. 
Then $\cmod {\map {f'} 0} \le 1$, and $\cmod {\map f z} \le \cmod z$ for all $z \in D$.


Corollary
Let $D$ be the unit disk centred at $0$.
Let $f : D \to \C$ be a holomorphic function.
If:

$\cmod {\map f \omega} = \cmod \omega$ for some $\omega \in D \setminus \set 0$
or:

$\cmod {\map {f'} 0} = 1$
then $\map f z = a z$ for all $z \in D$ for some $a \in \C$ with $\cmod a = 1$.


Proof
First a lemma:

Lemma
Let $D$ be the unit disk centred at $0$.
Let $g : D \to \C$ be a complex function such that: 

$\map g z = \begin {cases} \dfrac {\map f z} z & z \ne 0 \\ \map {f'} 0 & z = 0\end {cases}$
Then $g$ is holomorphic on $D$.
$\Box$

Let $g : D \to \C$ be a complex function such that:

$\map g z = \begin {cases} \frac {\map f z} z & z \ne 0 \\ \map {f'} 0 & z = 0\end {cases}$
By the lemma, $g$ is holomorphic on $D$. 
Let $r$ be a real number with $0 < r < 1$. 
Let $C_r$ be the closed disk of radius $r$ centered at $0$.
Since $C_r$ is compact, by Continuous Function on Compact Space is Bounded, $g$ attains its maximum on $C_r$.
Let $\alpha \in C_r$ be a point where this maximum is attained.
If $g$ is constant, then we can pick $\alpha$ to be any point on $C_r$. 
If $g$ is non-constant, then by the maximum modulus principle, $\alpha$ necessarily lies on the boundary of $C_r$.
That is, $\cmod \alpha = r$ if $g$ is non-constant. 
If $g$ is constant, pick $\alpha$ such that $\cmod \alpha = r$ to avoid splitting into cases.
With that, for all $z \in C_r$ we have:

$\cmod {\map g z} \le \cmod {\map g \alpha}$
Since $0$ lies in the interior of $C_r$, we must have $\alpha \ne 0$, so:














\(\ds \cmod {\map g \alpha}\)

\(=\)







\(\ds \cmod {\frac {\map f \alpha} \alpha}\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod {\map f \alpha} } {\cmod \alpha}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 r\)





since $\cmod {\map f z} \le 1$ on $D$, and $\cmod \alpha = r$



So, for all $z \in C_r$ we have: 

$\cmod {\map g z} \le \dfrac 1 r$

Aiming for a contradiction, suppose there exists $\omega \in D$ with: 

$\cmod \omega < 1$
$\cmod {\map g \omega} = 1 + \varepsilon > 1$
Note that we then have: 

$0 < \dfrac 1 {1 + \varepsilon} < 1$
Note that on $C_R$ with $R > \map \max {\dfrac 1 {1 + \varepsilon}, \cmod \omega}$, we should have: 

$\cmod {\map g z} \le \dfrac 1 R < 1 + \varepsilon$
However, we have $\omega \in C_R$ and: 

$\cmod {\map g \omega} = 1 + \varepsilon$
a contradiction. 
So, it must be the case that: 

$\cmod {\map g z} \le 1$
for all $z \in D$.

We have: 

$\cmod {\map {f'} 0} = \cmod {\map g 0} \le 1$
Note that: 

$\cmod {\map f 0} = 0$
so certainly: 

$\cmod {\map f z} \le \cmod z$
for $z = 0$. 
Take $z \in D \setminus \set 0$, from: 

$\cmod {\map g z} \le 1$
we have: 

$\cmod {\dfrac {\map f z} z} \le 1$
that is: 

$\cmod {\map f z} \le \cmod z$
hence the result.
$\blacksquare$


Source of Name
This entry was named for Karl Hermann Amandus Schwarz.





