# 

Source: https://proofwiki.org/wiki/Order_of_Shifted_Entire_Function

Theorem
Let $f: \C \to \C$ be an entire function of order $\alpha$.
Let $a \in \C$.

Then $\map f {z + a}$ has order $\alpha$.


Proof
We shall verify Definition 3 of Order of Entire Function.
Let $\map g z := \map f {z + a}$ for $z \in \C$.
Then for all $R > \cmod a$:

$\ds \max_{\cmod z \mathop \le R \mathop - \cmod a} \cmod {\map f z} \le \max_{\cmod z \mathop \le R} \cmod {\map g z} \le \max_{\cmod z \mathop \le R \mathop + \cmod a} \cmod {\map f z}$
Thus:

$\paren 1 : \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R \mathop - \cmod a} \cmod {\map f z} }{\ln R} \le \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R} \cmod {\map g z} }{\ln R} \le \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R \mathop + \cmod a} \cmod {\map f z} }{\ln R}$
On the other hand, for each $c \in \R$:

$\ds \paren 2 : \lim_{R \mathop \to +\infty} \dfrac {\map \ln {R + c} } {\ln R} = 1$
Thus:




\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds \limsup_{R \mathop \to +\infty} \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R \mathop - \cmod a} \cmod {\map f z} }{\ln R}\)




















\(\ds \)

\(=\)







\(\ds \lim_{R \mathop \to +\infty} \dfrac {\map \ln {R - \cmod a} }{\ln R} \limsup_{R \mathop \to +\infty} \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R \mathop - \cmod a} \cmod {\map f z} }{\map \ln {R - \cmod a} }\)





Product Rule














\(\ds \)

\(=\)







\(\ds 1 \cdot \alpha\)





by $\paren 2$ and by hypothesis














\(\ds \)

\(=\)







\(\ds \alpha\)









Similarly, we have:

$\ds \paren 4 : \limsup_{R \mathop \to +\infty} \dfrac {\ds \ln \ln \max_{\cmod z \mathop \le R + \cmod a} \cmod {\map f z} }{\ln R} = \alpha$
In view of $\paren 3$ and $\paren 4$, the claim follows from $\paren 1$ by Sandwich Rule.
$\blacksquare$


Also see
Order of Product of Entire Functions




