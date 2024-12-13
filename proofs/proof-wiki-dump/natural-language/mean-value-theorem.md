# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem

  This article was Featured Proof between 8th January 2011 and 2nd May 2011.




Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$


Proof 1
  
For any constant $h \in \R$ we may construct the real function defined on $\closedint a b$ by:

$\map F x = \map f x + h x$
We have that $h x$ is continuous on $\closedint a b$ from Linear Function is Continuous.
From the Sum Rule for Continuous Real Functions, $F$ is continuous on $\closedint a b$ and differentiable on $\openint a b$.
Let us calculate what the constant $h$ has to be such that $\map F a = \map F b$:














\(\ds \map F a\)

\(=\)







\(\ds \map F b\)














\(\ds \leadsto \ \ \)





\(\ds \map f a + h a\)

\(=\)







\(\ds \map f b + h b\)














\(\ds \leadsto \ \ \)





\(\ds \map f a - \map f b\)

\(=\)







\(\ds h b - h a\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \map f a - \map f b\)

\(=\)







\(\ds h \paren {b - a}\)





Real Multiplication Distributes over Real Addition








\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds -\dfrac {\map f b - \map f a} {b - a}\)





rearranging




Since $F$ satisfies the conditions for the application of Rolle's Theorem:

$\exists \xi \in \openint a b: \map {F'} \xi = 0$
But then:

$\map {F'} \xi = \map {f'} \xi + h = 0$
The result follows.
$\blacksquare$


Proof 2
Let $g : \closedint a b \to \R$ be a real function with: 

$\map g x = x$
for all $x \in \closedint a b$. 
By Power Rule for Derivatives, we have: 

$g$ is differentiable with $\map {g'} x = 1$ for all $x \in \closedint a b$.
Note that in particular: 

$\map {g'} x \ne 0$ for all $x \in \openint a b$.
Since $f$ is continuous on $\closedint a b$ and differentiable on $\openint a b$, we can apply the Cauchy Mean Value Theorem.
We therefore have that there exists $\xi \in \openint a b$ such that: 

$\dfrac {\map {f'} \xi} {\map {g'} \xi } = \dfrac {\map f b - \map f a} {\map g b - \map g a}$
Note that: 

$\map {g'} \xi = 1$
and: 

$\map g b - \map g a = b - a$
so this can be rewritten: 

$\map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$
$\blacksquare$


Proof 3
Recall the Cauchy Mean Value Theorem:
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Suppose:

$\forall x \in \openint a b: \map {g'} x \ne 0$

Then:

$\exists \xi \in \openint a b: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f b - \map f a} {\map g b - \map g a}$

The result follows by setting $\map g x = x$ for all $x \in \R$.
$\blacksquare$


Also presented as
The Mean Value Theorem can also be presented in the form:

$\map f {c + h} - \map f c = h \map {f'} {c + \theta h}$
for some $\theta \in \openint 0 1$.


Also known as
The Mean Value Theorem is also known as the Law of the Mean.
Some sources hyphenate: Mean-Value Theorem.


Examples
Example: $x^3$: Formulation $1$
Let $f$ be the real function defined as:

$\map f x = x^3$
Let:

$a = 1$, $b = 2$

Then when $\xi = \sqrt {\dfrac 7 3}$:

$\map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$


Example: $x^3$: Formulation $2$
Let $f$ be the real function defined as:

$\map f x = x^3$
Let:

$c = 2$, $h = -1$
Then when $\theta = 2 - \sqrt {\dfrac 7 3}$:

$\map {f'} {c + \theta h} = \dfrac {\map f {c + h} - \map f c} h$


Also see
Mean Value Theorem for Integrals


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.4$ Law of the Mean
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): mean-value theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): mean-value theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mean value theorem




