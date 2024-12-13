# 

Source: https://proofwiki.org/wiki/Schwarz%27s_Lemma/Corollary

Corollary to Schwarz's Lemma
Let $D$ be the unit disk centred at $0$.
Let $f : D \to \C$ be a holomorphic function.
If:

$\cmod {\map f \omega} = \cmod \omega$ for some $\omega \in D \setminus \set 0$
or:

$\cmod {\map {f'} 0} = 1$
then $\map f z = a z$ for all $z \in D$ for some $a \in \C$ with $\cmod a = 1$.


Proof
Let $g : D \to \C$ be a complex function with: 

$\map g z = \begin{cases}\frac {\map f z} z & z \ne 0 \\ \map {f'} 0 & z = 0\end{cases}$
By Schwarz's Lemma: Lemma, $g$ is holomorphic on $D$.
By Schwarz's Lemma, we have: 

$\cmod {\map g z} \le 1$
for all $z \in D$. 
Suppose that:

$\cmod {\map f \omega} = \cmod \omega$ for some $\omega \in D \setminus \set 0$.
Then, for this $\omega$, we have: 

$\cmod {\map g \omega} = 1$
Hence $g$ attains a maximum at $\omega \in D \setminus \set 0$.
As $D$ is a domain, by the Maximum Modulus Principle $g$ is therefore constant.
Suppose instead that: 

$\cmod {\map {f'} 0} = 1$
Then: 

$\cmod {\map g 0} = 1$
In this case, $g$ attains a maximum at $0 \in D$, again implying that $g$ is constant.
That is, there exists some $a \in \C$ such that: 

$\map g z = a$
Note that we then have: 

$\cmod {\map g 0} = \cmod a = 1$
For $z \in D \setminus \set 0$, we therefore have: 

$\dfrac {\map f z} z = a$
That is: 

$\map f z = a z$
As $\map f 0 = 0$, we have: 

$\map f z = a z$
for all $z \in D$, for some $a \in \C$ with $\cmod a = 1$.
$\blacksquare$


Source of Name
This entry was named for Karl Hermann Amandus Schwarz.





