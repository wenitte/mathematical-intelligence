# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Characteristic_Function_is_Characteristic_Function_of_Horizontal_Section

Theorem
Let $X$ and $Y$ be sets. 
Let $E \subseteq X \times Y$.
Let $y \in Y$. 

Then: 

$\paren {\chi_E}^y = \chi_{E^y}$
where:

$E^y$ is the $y$-horizontal section of $E$
$\chi_E$ and $\chi_{E^y}$ are the characteristic functions of $E$ and $E^y$ as subsets of $X \times Y$ respectively
$\paren {\chi_E}^y$ is the $y$-horizontal function of $\chi_E$.


Proof
We show that: 

$\map {\paren {\chi_E}^y} x = \begin{cases}1 & x \in E^y \\ 0 & x \not \in E^y\end{cases}$
at which point we'll be done from the definition of the characteristic function of $E^y$. 
From the definition of the $y$-horizontal section, we have: 

$\map {\paren {\chi_E}^y} x = \map {\chi_E} {x, y}$
From the definition of a characteristic function, we have: 

$\map {\chi_E} {x, y} = 1$ if and only if $\tuple {x, y} \in E$.
From the definition of the $y$-horizontal section, we then have: 

$\map {\chi_E} {x, y} = 1$ if and only if $x \in E^y$.
So:

$\map {\paren {\chi_E}^y} x = 1$ if and only if $x \in E^y$.
From the definition of a characteristic function, we also have: 

$\map {\chi_E} {x, y} = 1$ if and only if $\tuple {x, y} \not \in E$.
From the definition of the $y$-horizontal section, we then have: 

$\map {\chi_E} {x, y} = 0$ if and only if $x \not \in E^y$.
So:

$\map {\paren {\chi_E}^y} x = 0$ if and only if $x \not \in E^y$
giving:

$\map {\paren {\chi_E}^y} x = \begin{cases}1 & x \in E^y \\ 0 & x \not \in E^y\end{cases}$
which was the demand.
$\blacksquare$





