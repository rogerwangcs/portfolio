import React, {Component} from 'react';
import styled from 'styled-components'
import {mainColors} from 'utils/theme.js'

import 'utils/jupyter.css'

const StyledJupyter = styled.div `
  background-color: ${mainColors.creme};
  border-radius: 10px;

  h1,h2,h3,h4,h5,h6 {
    color: rgb(50, 50, 50);
  }
`;

const Jupyter = () => {
  return (
    <StyledJupyter><div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h1 id="College-and-Career-Salary-Analysis">College and Career Salary Analysis<a className="anchor-link" href="#College-and-Career-Salary-Analysis">¶</a></h1>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Import-Libraries">Import Libraries<a className="anchor-link" href="#Import-Libraries">¶</a></h3>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[27]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="kn">import</span> <span className="nn">numpy</span> <span className="k">as</span> <span className="nn">np</span>{"\n"}<span className="kn">import</span> <span className="nn">pandas</span> <span className="k">as</span> <span className="nn">pd</span>{"\n"}<span className="kn">import</span> <span className="nn">matplotlib.pyplot</span> <span className="k">as</span> <span className="nn">plt</span>{"\n"}<span className="kn">import</span> <span className="nn">seaborn</span> <span className="k">as</span> <span className="nn">sns</span>{"\n"}<span className="kn">import</span> <span className="nn">plotly</span>{"\n"}<span className="kn">import</span> <span className="nn">difflib</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Import-Data">Import Data<a className="anchor-link" href="#Import-Data">¶</a></h3>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[28]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">rankings</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">read_csv</span><span className="p">(</span><span className="s1">'Rankings.csv'</span><span className="p">,</span> <span className="n">encoding</span><span className="o">=</span> <span className="s1">'latin-1'</span><span className="p">)</span>{"\n"}<span className="n">rankings</span><span className="o">.</span><span className="n">head</span><span className="p">(</span><span className="mi">10</span><span className="p">)</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[28]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>Name</th>
                      <th>Location</th>
                      <th>Rank</th>
                      <th>Description</th>
                      <th>Tuition and fees</th>
                      <th>In-state</th>
                      <th>Undergrad Enrollment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>0</th>
                      <td>Princeton University</td>
                      <td>Princeton, NJ</td>
                      <td>1</td>
                      <td>Princeton, the fourth-oldest college in the Un...</td>
                      <td>$45,320</td>
                      <td>NaN</td>
                      <td>5,402</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>Harvard University</td>
                      <td>Cambridge, MA</td>
                      <td>2</td>
                      <td>Harvard is located in Cambridge, Massachusetts...</td>
                      <td>$47,074</td>
                      <td>NaN</td>
                      <td>6,699</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>University of Chicago</td>
                      <td>Chicago, IL</td>
                      <td>3</td>
                      <td>The University of Chicago, situated in Chicago...</td>
                      <td>$52,491</td>
                      <td>NaN</td>
                      <td>5,844</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Yale University</td>
                      <td>New Haven, CT</td>
                      <td>3</td>
                      <td>Yale University, located in New Haven, Connect...</td>
                      <td>$49,480</td>
                      <td>NaN</td>
                      <td>5,532</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Columbia University</td>
                      <td>New York, NY</td>
                      <td>5</td>
                      <td>Columbia University, located in Manhattan's Mo...</td>
                      <td>$55,056</td>
                      <td>NaN</td>
                      <td>6,102</td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>Stanford University</td>
                      <td>Stanford, CA</td>
                      <td>5</td>
                      <td>Stanford University's pristine campus is locat...</td>
                      <td>$47,940</td>
                      <td>NaN</td>
                      <td>6,999</td>
                    </tr>
                    <tr>
                      <th>6</th>
                      <td>Massachusetts Institute of Technology</td>
                      <td>Cambridge, MA</td>
                      <td>7</td>
                      <td>MIT is located in Cambridge, Massachusetts, ac...</td>
                      <td>$48,452</td>
                      <td>NaN</td>
                      <td>4,527</td>
                    </tr>
                    <tr>
                      <th>7</th>
                      <td>Duke University</td>
                      <td>Durham, NC</td>
                      <td>8</td>
                      <td>Durham, North Carolina, which surrounds Duke's...</td>
                      <td>$51,265</td>
                      <td>NaN</td>
                      <td>6,639</td>
                    </tr>
                    <tr>
                      <th>8</th>
                      <td>University of Pennsylvania</td>
                      <td>Philadelphia, PA</td>
                      <td>8</td>
                      <td>The University of Pennsylvania, located in Phi...</td>
                      <td>$51,464</td>
                      <td>NaN</td>
                      <td>9,726</td>
                    </tr>
                    <tr>
                      <th>9</th>
                      <td>Johns Hopkins University</td>
                      <td>Baltimore, MD</td>
                      <td>10</td>
                      <td>Johns Hopkins University has four main campuse...</td>
                      <td>$50,410</td>
                      <td>NaN</td>
                      <td>6,524</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Convert-tuition-costs-to-integers">Convert tuition costs to integers<a className="anchor-link" href="#Convert-tuition-costs-to-integers">¶</a></h3>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[29]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">]</span> <span className="o">=</span> <span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="nb">int</span><span className="p">(</span><span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'$'</span><span className="p">,</span><span className="s1">''</span><span className="p">)</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">','</span><span className="p">,</span><span className="s1">''</span><span className="p">)))</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Now-lets-take-a-look-at-the-data:">Now lets take a look at the data:<a className="anchor-link" href="#Now-lets-take-a-look-at-the-data:">¶</a></h3>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[30]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">rankings</span><span className="o">.</span><span className="n">describe</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[30]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>Rank</th>
                      <th>Tuition and fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>count</th>
                      <td>231.000000</td>
                      <td>231.000000</td>
                    </tr>
                    <tr>
                      <th>mean</th>
                      <td>113.982684</td>
                      <td>33769.246753</td>
                    </tr>
                    <tr>
                      <th>std</th>
                      <td>65.995518</td>
                      <td>10756.733516</td>
                    </tr>
                    <tr>
                      <th>min</th>
                      <td>1.000000</td>
                      <td>5300.000000</td>
                    </tr>
                    <tr>
                      <th>25%</th>
                      <td>56.000000</td>
                      <td>25693.000000</td>
                    </tr>
                    <tr>
                      <th>50%</th>
                      <td>111.000000</td>
                      <td>31608.000000</td>
                    </tr>
                    <tr>
                      <th>75%</th>
                      <td>171.000000</td>
                      <td>42721.000000</td>
                    </tr>
                    <tr>
                      <th>max</th>
                      <td>220.000000</td>
                      <td>55056.000000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <p>The median tuition and fees for the top 200 universities in the US is approx \$33769. The most expensive college is \$55056.</p>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Now-lets-compare-the-tuition-and-fees-to-ranking.">Now lets compare the tuition and fees to ranking.<a className="anchor-link" href="#Now-lets-compare-the-tuition-and-fees-to-ranking.">¶</a></h3><p>Lets plot tuition and fees on the x axis and the inverted rankings on the y axis.</p>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[31]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">gca</span><span className="p">()</span><span className="o">.</span><span className="n">invert_yaxis</span><span className="p">()</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_png output_subarea ">
              <img src="data:image/png;base64,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
  oSeEkIrz/wE1P2GPDlah3gAAAABJRU5ErkJggg==
  " />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <p>It appears for the most part, the higher the rank of a college, the more expensive it is to attend. Lets actually highlight the ivy league schools for comparison.</p>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[40]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">ivy</span> <span className="o">=</span> <span className="p">[</span><span className="s1">'Brown University'</span><span className="p">,</span><span className="s1">'Columbia University'</span><span className="p">,</span><span className="s1">'Cornell University'</span><span className="p">,</span><span className="s1">'Dartmouth College'</span><span className="p">,</span><span className="s1">'Harvard University'</span><span className="p">,</span><span className="s1">'University of Pennsylvania'</span><span className="p">,</span><span className="s1">'Priceton University'</span><span className="p">,</span><span className="s1">'Yale University'</span><span className="p">]</span>{"\n"}<span className="n">ivy_schools</span> <span className="o">=</span> <span className="n">rankings</span><span className="p">[</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Name'</span><span className="p">]</span><span className="o">.</span><span className="n">isin</span><span className="p">(</span><span className="n">ivy</span><span className="p">)]</span>{"\n"}<span className="n">ivy_schools</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[40]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>Name</th>
                      <th>Location</th>
                      <th>Rank</th>
                      <th>Description</th>
                      <th>Tuition and fees</th>
                      <th>In-state</th>
                      <th>Undergrad Enrollment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Harvard University</td>
                      <td>Cambridge, MA</td>
                      <td>2</td>
                      <td>Harvard is located in Cambridge, Massachusetts...</td>
                      <td>47074</td>
                      <td>NaN</td>
                      <td>6,699</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Yale University</td>
                      <td>New Haven, CT</td>
                      <td>3</td>
                      <td>Yale University, located in New Haven, Connect...</td>
                      <td>49480</td>
                      <td>NaN</td>
                      <td>5,532</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Columbia University</td>
                      <td>New York, NY</td>
                      <td>5</td>
                      <td>Columbia University, located in Manhattan's Mo...</td>
                      <td>55056</td>
                      <td>NaN</td>
                      <td>6,102</td>
                    </tr>
                    <tr>
                      <th>8</th>
                      <td>University of Pennsylvania</td>
                      <td>Philadelphia, PA</td>
                      <td>8</td>
                      <td>The University of Pennsylvania, located in Phi...</td>
                      <td>51464</td>
                      <td>NaN</td>
                      <td>9,726</td>
                    </tr>
                    <tr>
                      <th>10</th>
                      <td>Dartmouth College</td>
                      <td>Hanover, NH</td>
                      <td>11</td>
                      <td>Dartmouth College, located in Hanover, New Ham...</td>
                      <td>51438</td>
                      <td>NaN</td>
                      <td>4,307</td>
                    </tr>
                    <tr>
                      <th>13</th>
                      <td>Brown University</td>
                      <td>Providence, RI</td>
                      <td>14</td>
                      <td>Located atop College Hill in Providence, R.I.,...</td>
                      <td>51367</td>
                      <td>NaN</td>
                      <td>6,652</td>
                    </tr>
                    <tr>
                      <th>14</th>
                      <td>Cornell University</td>
                      <td>Ithaca, NY</td>
                      <td>15</td>
                      <td>Cornell University, located in Ithaca, New Yor...</td>
                      <td>50953</td>
                      <td>NaN</td>
                      <td>14,315</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[60]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">gca</span><span className="p">()</span><span className="o">.</span><span className="n">invert_yaxis</span><span className="p">()</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_png output_subarea ">
              <img src="data:image/png;base64,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
  " />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing text_cell rendered"><div className="prompt input_prompt">
      </div>
      <div className="inner_cell">
        <div className="text_cell_render border-box-sizing rendered_html">
          <h3 id="Since-all-of-the-ivys-are-private-schools,-their-tuitions-are-all-on-the-expensive-side.">Since all of the ivys are private schools, their tuitions are all on the expensive side.<a className="anchor-link" href="#Since-all-of-the-ivys-are-private-schools,-their-tuitions-are-all-on-the-expensive-side.">¶</a></h3>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[189]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">salaries</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">read_csv</span><span className="p">(</span><span className="s1">'Salaries.csv'</span><span className="p">,</span> <span className="n">encoding</span><span className="o">=</span> <span className="s1">'utf-8'</span><span className="p">)</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[11]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">salaries</span><span className="o">.</span><span className="n">head</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[11]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>School Name</th>
                      <th>Region</th>
                      <th>Starting Median Salary</th>
                      <th>Mid-Career Median Salary</th>
                      <th>Mid-Career 10th Percentile Salary</th>
                      <th>Mid-Career 25th Percentile Salary</th>
                      <th>Mid-Career 75th Percentile Salary</th>
                      <th>Mid-Career 90th Percentile Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>0</th>
                      <td>Stanford University</td>
                      <td>California</td>
                      <td>70400</td>
                      <td>129000</td>
                      <td>68400.0</td>
                      <td>93100</td>
                      <td>184000</td>
                      <td>257000.0</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>California Institute of Technology (CIT)</td>
                      <td>California</td>
                      <td>75500</td>
                      <td>123000</td>
                      <td>NaN</td>
                      <td>104000</td>
                      <td>161000</td>
                      <td>NaN</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Harvey Mudd College</td>
                      <td>California</td>
                      <td>71800</td>
                      <td>122000</td>
                      <td>NaN</td>
                      <td>96000</td>
                      <td>180000</td>
                      <td>NaN</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>University of California, Berkeley</td>
                      <td>California</td>
                      <td>59900</td>
                      <td>112000</td>
                      <td>59500.0</td>
                      <td>81000</td>
                      <td>149000</td>
                      <td>201000.0</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Occidental College</td>
                      <td>California</td>
                      <td>51900</td>
                      <td>105000</td>
                      <td>NaN</td>
                      <td>54800</td>
                      <td>157000</td>
                      <td>NaN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[141]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">bc</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">==</span> <span className="s1">'Boston College'</span><span className="p">]</span>{"\n"}<span className="n">bc</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[141]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>School Name</th>
                      <th>Region</th>
                      <th>Starting Median Salary</th>
                      <th>Mid-Career Median Salary</th>
                      <th>Mid-Career 10th Percentile Salary</th>
                      <th>Mid-Career 25th Percentile Salary</th>
                      <th>Mid-Career 75th Percentile Salary</th>
                      <th>Mid-Career 90th Percentile Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[258]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">axvline</span><span className="p">(</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">]</span><span className="o">.</span><span className="n">median</span><span className="p">(),</span> <span className="n">color</span><span className="o">=</span><span className="s1">'r'</span><span className="p">,</span> <span className="n">linestyle</span><span className="o">=</span><span className="s1">'dashed'</span><span className="p">,</span> <span className="n">linewidth</span><span className="o">=</span><span className="mi">2</span><span className="p">)</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">axvline</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">]</span><span className="o">.</span><span className="n">iloc</span><span className="p">[</span><span className="mi">0</span><span className="p">],</span> <span className="n">color</span><span className="o">=</span><span className="s1">'b'</span><span className="p">,</span> <span className="n">linestyle</span><span className="o">=</span><span className="s1">'dashed'</span><span className="p">,</span> <span className="n">linewidth</span><span className="o">=</span><span className="mi">2</span><span className="p">)</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">hist</span><span className="p">(</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">],</span><span className="n">bins</span><span className="o">=</span><span className="mi">20</span><span className="p">)</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[258]:</div>
            <div className="output_text output_subarea output_execute_result">
              <pre>(array([{"  "}7.,{"  "}15.,{"  "}25.,{"  "}56.,{"  "}48.,{"  "}51.,{"  "}37.,{"  "}20.,{"  "}17.,{"  "}12.,{"   "}7.,{"\n"}{"          "}6.,{"   "}9.,{"   "}3.,{"   "}2.,{"   "}1.,{"   "}0.,{"   "}1.,{"   "}2.,{"   "}1.]),{"\n"} array([ 34500.,{"  "}36550.,{"  "}38600.,{"  "}40650.,{"  "}42700.,{"  "}44750.,{"  "}46800.,{"\n"}{"         "}48850.,{"  "}50900.,{"  "}52950.,{"  "}55000.,{"  "}57050.,{"  "}59100.,{"  "}61150.,{"\n"}{"         "}63200.,{"  "}65250.,{"  "}67300.,{"  "}69350.,{"  "}71400.,{"  "}73450.,{"  "}75500.]),{"\n"} &lt;a list of 20 Patch objects&gt;)</pre>
            </div>
          </div>
          <div className="output_area">
            <div className="prompt" />
            <div className="output_png output_subarea ">
              <img src="data:image/png;base64,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
  " />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[195]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">rankings</span><span className="p">[</span><span className="s1">'Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">rankings</span><span className="p">[</span><span className="s1">'Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'--'</span><span className="p">,</span><span className="s1">' '</span><span className="p">))</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[198]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">str</span><span className="o">.</span><span className="n">split</span><span className="p">(</span><span className="s1">'('</span><span className="p">)</span><span className="o">.</span><span className="n">str</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[199]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">','</span><span className="p">,</span><span className="s1">''</span><span className="p">)</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'-'</span><span className="p">,</span><span className="s1">''</span><span className="p">))</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[200]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">rstrip</span><span className="p">())</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[278]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">combined</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">merge</span><span className="p">(</span><span className="n">rankings</span><span className="p">,</span> <span className="n">salaries</span><span className="p">,</span> <span className="n">left_on</span> <span className="o">=</span> <span className="s1">'Name'</span><span className="p">,</span> <span className="n">right_on</span> <span className="o">=</span> <span className="s1">'School Name'</span><span className="p">)</span><span className="o">.</span><span className="n">sort_values</span><span className="p">(</span><span className="s1">'Rank'</span><span className="p">)</span>{"\n"}<span className="n">combined</span><span className="o">.</span><span className="n">head</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt output_prompt">Out[278]:</div>
            <div className="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped dangerouslySetInnerHTML={{__html: "\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n" }} />
                <table border={1} className="dataframe">
                  <thead>
                    <tr style={{textAlign: 'right'}}>
                      <th />
                      <th>Name</th>
                      <th>Location</th>
                      <th>Rank</th>
                      <th>Description</th>
                      <th>Tuition and fees</th>
                      <th>In-state</th>
                      <th>Undergrad Enrollment</th>
                      <th>School Name</th>
                      <th>Region</th>
                      <th>Starting Median Salary</th>
                      <th>Mid-Career Median Salary</th>
                      <th>Mid-Career 10th Percentile Salary</th>
                      <th>Mid-Career 25th Percentile Salary</th>
                      <th>Mid-Career 75th Percentile Salary</th>
                      <th>Mid-Career 90th Percentile Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>0</th>
                      <td>Princeton University</td>
                      <td>Princeton, NJ</td>
                      <td>1</td>
                      <td>Princeton, the fourth-oldest college in the Un...</td>
                      <td>45320</td>
                      <td>NaN</td>
                      <td>5,402</td>
                      <td>Princeton University</td>
                      <td>Northeastern</td>
                      <td>66500</td>
                      <td>131000</td>
                      <td>68900.0</td>
                      <td>100000</td>
                      <td>190000</td>
                      <td>261000.0</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>Harvard University</td>
                      <td>Cambridge, MA</td>
                      <td>2</td>
                      <td>Harvard is located in Cambridge, Massachusetts...</td>
                      <td>47074</td>
                      <td>NaN</td>
                      <td>6,699</td>
                      <td>Harvard University</td>
                      <td>Northeastern</td>
                      <td>63400</td>
                      <td>124000</td>
                      <td>54800.0</td>
                      <td>86200</td>
                      <td>179000</td>
                      <td>288000.0</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Yale University</td>
                      <td>New Haven, CT</td>
                      <td>3</td>
                      <td>Yale University, located in New Haven, Connect...</td>
                      <td>49480</td>
                      <td>NaN</td>
                      <td>5,532</td>
                      <td>Yale University</td>
                      <td>Northeastern</td>
                      <td>59100</td>
                      <td>126000</td>
                      <td>58000.0</td>
                      <td>80600</td>
                      <td>198000</td>
                      <td>326000.0</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Columbia University</td>
                      <td>New York, NY</td>
                      <td>5</td>
                      <td>Columbia University, located in Manhattan's Mo...</td>
                      <td>55056</td>
                      <td>NaN</td>
                      <td>6,102</td>
                      <td>Columbia University</td>
                      <td>Northeastern</td>
                      <td>59400</td>
                      <td>107000</td>
                      <td>50300.0</td>
                      <td>71900</td>
                      <td>161000</td>
                      <td>241000.0</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Stanford University</td>
                      <td>Stanford, CA</td>
                      <td>5</td>
                      <td>Stanford University's pristine campus is locat...</td>
                      <td>47940</td>
                      <td>NaN</td>
                      <td>6,999</td>
                      <td>Stanford University</td>
                      <td>California</td>
                      <td>70400</td>
                      <td>129000</td>
                      <td>68400.0</td>
                      <td>93100</td>
                      <td>184000</td>
                      <td>257000.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[216]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="k">del</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">])</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[225]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">combined</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">set_index</span><span className="p">(</span><span className="s1">'Name'</span><span className="p">)</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_subarea output_text output_error">
              <pre><span className="ansi-red-intense-fg ansi-bold">---------------------------------------------------------------------------</span>{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>{"                                  "}Traceback (most recent call last){"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\indexes\base.py</span> in <span className="ansi-cyan-fg">get_loc</span><span className="ansi-blue-intense-fg ansi-bold">(self, key, method, tolerance)</span>{"\n"}<span className="ansi-green-fg">{"   "}2521</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">try</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2522</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2523</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">except</span> KeyError<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>: 'Name'{"\n"}{"\n"}During handling of the above exception, another exception occurred:{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>{"                                  "}Traceback (most recent call last){"\n"}<span className="ansi-green-intense-fg ansi-bold">&lt;ipython-input-225-6505fb645b52&gt;</span> in <span className="ansi-cyan-fg">&lt;module&gt;</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">----&gt; 1</span><span className="ansi-yellow-intense-fg ansi-bold"> </span>combined <span className="ansi-yellow-intense-fg ansi-bold">=</span> combined<span className="ansi-yellow-intense-fg ansi-bold">.</span>set_index<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-blue-intense-fg ansi-bold">'Name'</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">set_index</span><span className="ansi-blue-intense-fg ansi-bold">(self, keys, drop, append, inplace, verify_integrity)</span>{"\n"}<span className="ansi-green-fg">{"   "}3144</span>{"                 "}names<span className="ansi-yellow-intense-fg ansi-bold">.</span>append<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-green-intense-fg ansi-bold">None</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3145</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 3146</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span>level <span className="ansi-yellow-intense-fg ansi-bold">=</span> frame<span className="ansi-yellow-intense-fg ansi-bold">[</span>col<span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">.</span>_values{"\n"}<span className="ansi-green-fg">{"   "}3147</span>{"                 "}names<span className="ansi-yellow-intense-fg ansi-bold">.</span>append<span className="ansi-yellow-intense-fg ansi-bold">(</span>col<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3148</span>{"                 "}<span className="ansi-green-intense-fg ansi-bold">if</span> drop<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">__getitem__</span><span className="ansi-blue-intense-fg ansi-bold">(self, key)</span>{"\n"}<span className="ansi-green-fg">{"   "}2137</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_getitem_multilevel<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2138</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2139</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_getitem_column<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2140</span> {"\n"}<span className="ansi-green-fg">{"   "}2141</span>{"     "}<span className="ansi-green-intense-fg ansi-bold">def</span> _getitem_column<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">,</span> key<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">_getitem_column</span><span className="ansi-blue-intense-fg ansi-bold">(self, key)</span>{"\n"}<span className="ansi-green-fg">{"   "}2144</span>{"         "}<span className="ansi-red-intense-fg ansi-bold"># get column</span>{"\n"}<span className="ansi-green-fg">{"   "}2145</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">if</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>columns<span className="ansi-yellow-intense-fg ansi-bold">.</span>is_unique<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2146</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_get_item_cache<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2147</span> {"\n"}<span className="ansi-green-fg">{"   "}2148</span>{"         "}<span className="ansi-red-intense-fg ansi-bold"># duplicate columns &amp; possible reduce dimensionality</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\generic.py</span> in <span className="ansi-cyan-fg">_get_item_cache</span><span className="ansi-blue-intense-fg ansi-bold">(self, item)</span>{"\n"}<span className="ansi-green-fg">{"   "}1840</span>{"         "}res <span className="ansi-yellow-intense-fg ansi-bold">=</span> cache<span className="ansi-yellow-intense-fg ansi-bold">.</span>get<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1841</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">if</span> res <span className="ansi-green-intense-fg ansi-bold">is</span> <span className="ansi-green-intense-fg ansi-bold">None</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 1842</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span>values <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_data<span className="ansi-yellow-intense-fg ansi-bold">.</span>get<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1843</span>{"             "}res <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_box_item_values<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">,</span> values<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1844</span>{"             "}cache<span className="ansi-yellow-intense-fg ansi-bold">[</span>item<span className="ansi-yellow-intense-fg ansi-bold">]</span> <span className="ansi-yellow-intense-fg ansi-bold">=</span> res{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\internals.py</span> in <span className="ansi-cyan-fg">get</span><span className="ansi-blue-intense-fg ansi-bold">(self, item, fastpath)</span>{"\n"}<span className="ansi-green-fg">{"   "}3836</span> {"\n"}<span className="ansi-green-fg">{"   "}3837</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">if</span> <span className="ansi-green-intense-fg ansi-bold">not</span> isna<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 3838</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span>loc <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3839</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-fg">{"   "}3840</span>{"                 "}indexer <span className="ansi-yellow-intense-fg ansi-bold">=</span> np<span className="ansi-yellow-intense-fg ansi-bold">.</span>arange<span className="ansi-yellow-intense-fg ansi-bold">(</span>len<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">[</span>isna<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">]</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\indexes\base.py</span> in <span className="ansi-cyan-fg">get_loc</span><span className="ansi-blue-intense-fg ansi-bold">(self, key, method, tolerance)</span>{"\n"}<span className="ansi-green-fg">{"   "}2522</span>{"                 "}<span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2523</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">except</span> KeyError<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2524</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_maybe_cast_indexer<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2525</span> {"\n"}<span className="ansi-green-fg">{"   "}2526</span>{"         "}indexer <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_indexer<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-yellow-intense-fg ansi-bold">[</span>key<span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span> method<span className="ansi-yellow-intense-fg ansi-bold">=</span>method<span className="ansi-yellow-intense-fg ansi-bold">,</span> tolerance<span className="ansi-yellow-intense-fg ansi-bold">=</span>tolerance<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>: 'Name'</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[247]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">stanford</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">loc</span><span className="p">[</span><span className="s1">'Stanford University'</span><span className="p">]</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[269]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">bc</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">loc</span><span className="p">[</span><span className="s1">'Boston College'</span><span className="p">]</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[41]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_subarea output_text output_error">
              <pre><span className="ansi-red-intense-fg ansi-bold">---------------------------------------------------------------------------</span>{"\n"}<span className="ansi-red-intense-fg ansi-bold">NameError</span>{"                                 "}Traceback (most recent call last){"\n"}<span className="ansi-green-intense-fg ansi-bold">&lt;ipython-input-41-868bd0805b18&gt;</span> in <span className="ansi-cyan-fg">&lt;module&gt;</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">----&gt; 1</span><span className="ansi-yellow-intense-fg ansi-bold"> </span>plt<span className="ansi-yellow-intense-fg ansi-bold">.</span>scatter<span className="ansi-yellow-intense-fg ansi-bold">(</span>combined<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Rank'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span>combined<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Starting Median Salary'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"      "}2</span> plt<span className="ansi-yellow-intense-fg ansi-bold">.</span>scatter<span className="ansi-yellow-intense-fg ansi-bold">(</span>ivy_schools<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Rank'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span>ivy_schools<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Starting Median Salary'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"      "}3</span> plt<span className="ansi-yellow-intense-fg ansi-bold">.</span>scatter<span className="ansi-yellow-intense-fg ansi-bold">(</span>stanford<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Rank'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span>stanford<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Starting Median Salary'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"      "}4</span> plt<span className="ansi-yellow-intense-fg ansi-bold">.</span>scatter<span className="ansi-yellow-intense-fg ansi-bold">(</span>bc<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Rank'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span>bc<span className="ansi-yellow-intense-fg ansi-bold">[</span><span className="ansi-blue-intense-fg ansi-bold">'Starting Median Salary'</span><span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"      "}5</span> plt<span className="ansi-yellow-intense-fg ansi-bold">.</span>show<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">NameError</span>: name 'combined' is not defined</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[273]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_png output_subarea ">
              <img src="data:image/png;base64,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
  AAAAAElFTkSuQmCC
  " />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cell border-box-sizing code_cell rendered">
      <div className="input">
        <div className="prompt input_prompt">In&nbsp;[252]:</div>
        <div className="inner_cell">
          <div className="input_area">
            <div className=" highlight hl-ipython3"><pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre></div>
          </div>
        </div>
      </div>
      <div className="output_wrapper">
        <div className="output">
          <div className="output_area">
            <div className="prompt" />
            <div className="output_png output_subarea ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAD8CAYAAACcjGjIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlz
  AAALEgAACxIB0t1+/AAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDIuMS4wLCBo
  dHRwOi8vbWF0cGxvdGxpYi5vcmcvpW3flQAAIABJREFUeJzt3XuU3HV9//HnO5sNLlbYRBYJm0Ri
  TfHH5UcuK+BJDwfjwYRLk3ihhvan+VmO4WfBWttfJGk5JSit0fw8KK1FIlLBWkO4ha2i25RIT0sF
  sssGQsCUlVt2E8hSCLUlJbf374/5TJjd+c7Md2a+c389zpmzs5/5zMzn+93k+/5+7ubuiIiIZJpQ
  6wKIiEj9UXAQEZEsCg4iIpJFwUFERLIoOIiISBYFBxERyaLgICIiWRQcREQki4KDiIhkmVjrApTq
  hBNO8FNOOaXWxRARaSgDAwOvuHtXoXwNGxxOOeUU+vv7a10MEZGGYmYvxMmnZiUREcmi4CAiIlkU
  HEREJIuCg4iIZFFwEBGRLA07WklEJMqmwRHW9e1k9779nNzZwcqFp7J0Tneti9VwFBxEpGlsGhxh
  9T3b2X/wMAAj+/az+p7tAAoQRSrYrGRmp5rZtozHf5jZH5rZGjMbyUi/KOM9q81syMx2mtnCjPRF
  IW3IzFZlpM80s0fM7Bkzu8PMJiV/qCLS7Nb17TwaGNL2HzzMur6dNSpR4yoYHNx9p7vPdvfZwDzg
  DeDe8PIN6dfc/X4AMzsNWAacDiwC/trM2sysDfgWcCFwGnBZyAvw1fBZs4DXgMuTO0QRaRW79+0v
  Kl1yK7ZD+kPAL9093wy7JcAGd3/T3Z8DhoCzw2PI3Z919wPABmCJmRmwALgrvP82YGmR5RIR4eTO
  jqLSJbdig8My4IcZv19lZk+Y2a1mNjmkdQO7MvIMh7Rc6e8E9rn7oXHpIiJFWbnwVDra28akdbS3
  sXLhqTUqUeOKHRxCP8Bi4M6QdBPw68BsYA/w9XTWiLd7CelRZVhhZv1m1j86Ohq36CLSIpbO6eYr
  Hz2T7s4ODOju7OArHz1TndElKGa00oXAY+7+MkD6J4CZfQf4Ufh1GJie8b5pwO7wPCr9FaDTzCaG
  2kNm/jHcfT2wHqCnpycygIhIa1s6p1vBIAHFNCtdRkaTkplNzXjtI8CT4XkvsMzMjjGzmcAs4FFg
  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
  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </StyledJupyter>
  );
}

export default Jupyter;