# 

Source: https://proofwiki.org/wiki/Negative_Part_of_Pointwise_Product_of_Functions

Theorem
Let $X$ be a set. 
Let $f, g : X \to \overline \R$ be extended real-valued functions.

Then: 

$\paren {f \cdot g}^- = f^- g^+ + f^+ g^-$
where: 

$f \cdot g$ is the pointwise product of $f$ and $g$
$\paren {f \cdot g}^-$ denotes the negative part.


Proof
We have: 














\(\ds \map f x \map g x\)

\(=\)







\(\ds \paren {\map {f^+} x - \map {f^-} x} \paren {\map {g^+} x - \map {g^-} x}\)





Difference of Positive and Negative Parts














\(\ds \)

\(=\)







\(\ds \map {f^+} x \map {g^+} x - \map {f^-} x \map {g^+} x - \map {f^+} x \map {g^-} x + \map {f^-} x \map {g^-} x\)









Note that we have $\map f x \map g x \le 0$ if and only if $\map f x$ and $\map g x$ have the opposite sign.
That is, if and only if $\map f x \ge 0$ and $\map g x \le 0$ or $\map f x \le 0$ and $\map g x \ge 0$. 
In the first case, we have $\map {g^+} x = 0$ and $\map {f^-} x = 0$, so:

$\map {f^+} x \map {g^+} x = \map {f^-} x \map {g^-} x = 0$
In the second case, we have $\map {f^+} x = 0$ and $\map {g^-} x = 0$, so: 

$\map {f^+} x \map {g^+} x = \map {f^-} x \map {g^-} x = 0$
So, in either case we have: 

$\map f x \map g x = -\paren {\map {f^-} x \map {g^+} x + \map {f^+} x \map {g^-} x}$
so since: 

$\map {f^-} x \map {g^+} x + \map {f^+} x \map {g^-} x \ge 0$
we obtain: 

$\map {\paren {f \cdot g}^-} x = \map {f^-} x \map {g^+} x + \map {f^+} x \map {g^-} x$
if $\map f x \map g x \le 0$. 
If $\map f x \map g x \ge 0$, $\map f x$ and $\map g x$ have the same sign. 
That is, either $\map f x \ge 0$ and $\map g x \ge 0$ or $\map f x \le 0$ and $\map g x \le 0$. 
In the first case, we have $\map {f^-} x = 0$ and $\map {g^-} x = 0$, so: 

$\map {f^-} x \map {g^+} x + \map {f^+} x \map {g^-} x = \map {\paren {f \cdot g}^-} x = 0$
In the second case, we have $\map {f^+} x = 0$ and $\map {g^+} x = 0$, so: 

$\map {f^-} x \map {g^+} x + \map {f^+} x \map {g^-} x = \map {\paren {f \cdot g}^-} x = 0$
and hence we are done.
$\blacksquare$





