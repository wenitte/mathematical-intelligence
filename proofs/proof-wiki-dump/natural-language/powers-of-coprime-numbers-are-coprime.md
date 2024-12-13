# 

Source: https://proofwiki.org/wiki/Powers_of_Coprime_Numbers_are_Coprime



Theorem
Let $a, b$ be coprime integers:

$a \perp b$

Then:

$\forall n \in \N_{>0}: a^n \perp b^n$

In the words of Euclid:

If two numbers be prime to one another, and each by multiplying itself make a certain number, the products will be prime to one another; and if the original numbers by multiplying the products make certain numbers, the latter will also be prime to one another [and this is always the case with the extremes].
(The Elements: Book $\text{VII}$: Proposition $27$)


Proof
Proof by induction:
Let  $a \perp b$.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$a^n \perp b^n$

$\map P 1$ is true, as this just says:

$a \perp b$


Basis for the Induction
By Proposition $25$ of Book $\text{VII} $: Square of Coprime Number is Coprime:

$a^2 \perp b$
Again, by Proposition $25$ of Book $\text{VII} $: Square of Coprime Number is Coprime:

$a^2 \perp b^2$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$a^k \perp b^k$

Then we need to show:

$a^{k + 1} \perp b^{k + 1}$


Induction Step
This is our induction step:















\(\ds a^k\)

\(\perp\)







\(\ds b^k\)














\(\ds \leadsto \ \ \)





\(\ds a^k \times a\)

\(\perp\)







\(\ds b^k\)





Proposition $24$ of Book $\text{VII} $: Integer Coprime to Factors is Coprime to Whole








\(\ds \leadsto \ \ \)





\(\ds a^{k + 1}\)

\(\perp\)







\(\ds b^k\)














\(\ds \leadsto \ \ \)





\(\ds a^{k + 1}\)

\(\perp\)







\(\ds b^k \times b\)





Proposition $24$ of Book $\text{VII} $: Integer Coprime to Factors is Coprime to Whole








\(\ds \leadsto \ \ \)





\(\ds a^{k + 1}\)

\(\perp\)







\(\ds b^{k + 1}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: a^n \perp b^n$
$\blacksquare$


Historical Note
This proof is Proposition $27$ of Book $\text{VII}$ of Euclid's The Elements. Euclid's proof does not use the full induction process, which is a later mathematical innovation. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




