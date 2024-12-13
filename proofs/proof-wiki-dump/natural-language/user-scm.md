# 

Source: https://proofwiki.org/wiki/User:Scm



Equivalences of Exp-Definitions
DE implies sum of series
Theorem
The definitions of the exponential function as given by:

A sum of a series $\map \exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$
The unique solution to the differential equation $\dfrac {\d y} {\d x} = y$ with initial condition $y(0)=1$.
are equivalent definitions of the function $exp: \R \to [0,\infty)$.


This article is incomplete.In particular: at the moment this page only shows equivalence of some but not all of the definitions from Definition:Real Exponential FunctionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Equivalence of sum of series and solution of differential equation definitions
To prove that the differential equation definition and the sum of series definition are equivalent, denote

$f(x) := \ds \sum_{n = 0}^\infty \frac {x^n} {n!}$
and let $g(x)$ be the unique (by Uniquess of solutions for Differential Equation) solution of the differential equation

$\dfrac{\mathrm d y}{\mathrm d x} = y$
satisfying the initial condition  $g(0) = 1$.
We have to show that $f(x)=g(x)$ for $\forall x \in \mathbb{R}$.
Using Differentation of uniformly convergent series and Powerseries are uniformly convergent (and maybe Weierstrass M-Test) to differentiate $f$ we get

$f'(x) = \ds \sum_{n = 1}^\infty \frac {x^{n-1}} {(n-1)!}$
which after adjusting the index, by replacing $n$ by $n+1$ gives us $f$ back. 
Furthermore, $f(0)=1$, hence $f$ is a solution to the differential equation, and by uniqueness of the solution $f=g$.
$\blacksquare$


I considered doing that, but I don't know how to adjust indices. Wanna teach me? --GFauxPas 17:06, 9 February 2012 (EST)
Adjustment of Indices and its related result Permutation of Indices are results still missing from this site. I keep meaning to get to them, but formulating them neatly and concisely takes work and thought (both of which I like to postpone). --prime mover 17:34, 9 February 2012 (EST)
Yes, Adjustment of Indices is a simple concept, and yet I don't know how to describe it precisely either. --Scm 06:20, 10 February 2012 (EST)
Keep in mind that what you're doing has already been proven Equivalence of Definitions of Exponential Function. However, your proofs are likely to be more elegant than mine, so you might want to continue anyway, I dunno. Your contributing to PW is a good thing, in any event. --GFauxPas 06:23, 10 February 2012 (EST)
SCM, perhaps you should use your proof here and replace the first proof for Derivative of Exponential Function. It's a lot more complicated than it needs to be now that we have all this stuff about exponentials on PW. A lot of the exponential pages weren't up when proof 1 there was written. --GFauxPas 09:14, 10 February 2012 (EST)

No, don't replace, add another proof. --prime mover 17:20, 10 February 2012 (EST)
Sorry I shouldn't have said that. I meant "use your work to replace what's there with a better version of the same proof", but looking at it now I see the proofs are distinct. --GFauxPas 19:46, 11 February 2012 (EST)




